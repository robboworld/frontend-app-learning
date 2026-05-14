// Copyright (C) 2026 Robbo <https://robbo.ru>
// SPDX-License-Identifier: AGPL-3.0-only
// Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.

import { useLayoutEffect, useState } from 'react';
import { debounce } from 'lodash';

const DEBOUNCE_MS = 100;

/** Matches courseware search positioning — tabs bar anchor in LoadedTabPage. */
const COURSE_TABS_NAV_ID = 'courseTabsNavigation';

/** Robbo shell header (`robbo-layout/index.scss`); courseware pages often have no `#courseTabsNavigation`. */
const ROBBO_HEADER_SELECTOR = '.robbo-layout-header';

/**
 * Viewport offset (px) for the top edge of fullscreen fixed trays (`position: fixed`),
 * so they sit below the Robbo header and (when present) the course tabs row.
 */
export function useCourseOutlineOverlayTopPx() {
  const [topPx, setTopPx] = useState(0);

  useLayoutEffect(() => {
    const recalculate = () => {
      const tabsEl = document.getElementById(COURSE_TABS_NAV_ID);
      const headerEl = document.querySelector(ROBBO_HEADER_SELECTOR);
      const tabsBottom = tabsEl ? tabsEl.getBoundingClientRect().bottom : 0;
      const headerBottom = headerEl ? headerEl.getBoundingClientRect().bottom : 0;
      const chromeBottom = Math.max(tabsBottom, headerBottom);
      // Tabs scrolled above the viewport: still anchor below the header when it is visible.
      setTopPx(chromeBottom > 0 ? Math.floor(chromeBottom) : 0);
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

    const tabsEl = document.getElementById(COURSE_TABS_NAV_ID);
    const headerEl = document.querySelector(ROBBO_HEADER_SELECTOR);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { recalculate(); }) : null;
    if (ro && tabsEl) {
      ro.observe(tabsEl);
    }
    if (ro && headerEl) {
      ro.observe(headerEl);
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
