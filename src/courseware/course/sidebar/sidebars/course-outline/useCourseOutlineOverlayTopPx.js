// Copyright (C) 2026 Robbo <https://robbo.ru>
// SPDX-License-Identifier: AGPL-3.0-only
// Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.

import { useLayoutEffect, useState } from 'react';
import { debounce } from 'lodash';

const DEBOUNCE_MS = 100;

/** Matches courseware search positioning — tabs bar anchor in LoadedTabPage. */
const COURSE_TABS_NAV_ID = 'courseTabsNavigation';

/**
 * Viewport offset (px) for the top edge of the fullscreen course-outline tray (`position: fixed`),
 * so it sits below the course tabs row instead of covering the header and tabs.
 */
export function useCourseOutlineOverlayTopPx() {
  const [topPx, setTopPx] = useState(0);

  useLayoutEffect(() => {
    const recalculate = () => {
      const el = document.getElementById(COURSE_TABS_NAV_ID);
      if (!el) {
        setTopPx(0);
        return;
      }
      const { bottom } = el.getBoundingClientRect();
      // Tabs scrolled above the viewport: fall back to full viewport from top.
      setTopPx(bottom > 0 ? Math.floor(bottom) : 0);
    };

    /** Scroll fires very often — debouncing made `top` lag behind the scrolling page (sluggish overlay). */
    let scrollRafId = null;
    const scheduleOnScroll = () => {
      if (scrollRafId != null) {
        return;
      }
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null;
        recalculate();
      });
    };

    /** Resize bursts (e.g. rotate) — keep light debouncing. */
    const debouncedResize = debounce(recalculate, DEBOUNCE_MS, { leading: true, trailing: true });

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('scroll', scheduleOnScroll, { capture: true, passive: true });

    const el = document.getElementById(COURSE_TABS_NAV_ID);
    const ro = typeof ResizeObserver !== 'undefined' && el
      ? new ResizeObserver(() => { recalculate(); })
      : null;
    if (ro && el) {
      ro.observe(el);
    }

    recalculate();

    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('scroll', scheduleOnScroll, { capture: true });
      debouncedResize.cancel();
      if (scrollRafId != null) {
        cancelAnimationFrame(scrollRafId);
      }
      if (ro) {
        ro.disconnect();
      }
    };
  }, []);

  return topPx;
}
