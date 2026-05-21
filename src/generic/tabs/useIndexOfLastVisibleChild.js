import { useLayoutEffect, useRef, useState } from 'react';

const invisibleStyle = {
  position: 'absolute',
  left: 0,
  pointerEvents: 'none',
  visibility: 'hidden',
  maxWidth: '100%',
};

/**
 * This hook will find the index of the last child of a containing element
 * that fits within its bounding rectangle. This is done by summing the widths
 * of the children until they exceed the width of the container.
 *
 * The hook returns an array containing:
 * [indexOfLastVisibleChild, containerElementRef, invisibleStyle, overflowElementRef]
 *
 * indexOfLastVisibleChild - the index of the last visible child
 * containerElementRef - a ref to be added to the containing html node
 * invisibleStyle - a set of styles to be applied to child of the containing node
 *    if it needs to be hidden. These styles remove the element visually, from
 *    screen readers, and from normal layout flow. But, importantly, these styles
 *    preserve the width of the element, so that future width calculations will
 *    still be accurate.
 * overflowElementRef - a ref to be added to an html node inside the container
 *    that is likely to be used to contain a "More" type dropdown or other
 *    mechanism to reveal hidden children. The width of this element is only
 *    reserved when tabs do not all fit. Usage of this ref is optional.
 */
export default function useIndexOfLastVisibleChild(isSidebarOpen, tabCount) {
  const containerElementRef = useRef(null);
  const overflowElementRef = useRef(null);
  const lastMeasurementRef = useRef({ width: undefined, tabCount: undefined });
  const [indexOfLastVisibleChild, setIndexOfLastVisibleChild] = useState(-1);

  useLayoutEffect(() => {
    const container = containerElementRef.current;
    if (!container) {
      return undefined;
    }

    const measure = () => {
      // Use nav-menu row width: <nav> can shrink to in-flow children while hidden tabs stay measurable.
      const parentWidth = container.parentElement?.getBoundingClientRect().width;
      const availableWidth = Math.floor(parentWidth || container.getBoundingClientRect().width);

      if (
        availableWidth === lastMeasurementRef.current.width
        && tabCount === lastMeasurementRef.current.tabCount
      ) {
        return;
      }
      lastMeasurementRef.current = { width: availableWidth, tabCount };

      const childNodesArr = Array.prototype.slice.call(container.children)
        .filter(childNode => childNode !== overflowElementRef.current);

      const tabWidths = childNodesArr.map(
        childNode => Math.floor(childNode.getBoundingClientRect().width),
      );
      const totalTabsWidth = tabWidths.reduce((sum, width) => sum + width, 0);

      let nextIndexOfLastVisibleChild;

      if (childNodesArr.length === 0) {
        nextIndexOfLastVisibleChild = -1;
      } else if (totalTabsWidth <= availableWidth) {
        // All tabs fit — do not reserve «More» width (fixes premature overflow on mobile).
        nextIndexOfLastVisibleChild = childNodesArr.length - 1;
      } else {
        const overflowWidth = overflowElementRef.current
          ? Math.floor(overflowElementRef.current.getBoundingClientRect().width)
          : 0;
        let sumWidth = overflowWidth;
        nextIndexOfLastVisibleChild = -1;
        tabWidths.forEach((width, index) => {
          sumWidth += width;
          if (sumWidth <= availableWidth) {
            nextIndexOfLastVisibleChild = index;
          }
        });
      }

      setIndexOfLastVisibleChild(nextIndexOfLastVisibleChild);
    };

    measure();

    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);
    if (container.parentElement) {
      resizeObserver.observe(container.parentElement);
    }

    return () => resizeObserver.disconnect();
  }, [tabCount, isSidebarOpen]);

  return [indexOfLastVisibleChild, containerElementRef, invisibleStyle, overflowElementRef];
}
