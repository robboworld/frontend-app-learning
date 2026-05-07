// Copyright (C) 2026 Robbo <https://robbo.ru>
// SPDX-License-Identifier: AGPL-3.0-only
// Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.

import { useLayoutEffect } from 'react';

/** Keep in sync with `CourseOutlineTray.scss` (body rule). */
export const COURSE_OUTLINE_TRAY_SCROLL_LOCK_CLASS = '_course-outline-tray-no-scroll';

/**
 * When the course outline opens fullscreen, the page behind it must not scroll — only the tray should.
 */
export function useCourseOutlineTrayScrollLock(enabled) {
  useLayoutEffect(() => {
    if (!enabled) {
      return undefined;
    }
    document.body.classList.add(COURSE_OUTLINE_TRAY_SCROLL_LOCK_CLASS);
    return () => {
      document.body.classList.remove(COURSE_OUTLINE_TRAY_SCROLL_LOCK_CLASS);
    };
  }, [enabled]);
}
