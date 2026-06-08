/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 */
import { getConfig } from '@edx/frontend-platform';

import { VERIFIED_MODES } from '../constants';
import { filterNavigationTabs } from './filterNavigationTabs';

export const VERIFIED_TAB_SLUG = 'verified';

export function getVerifiedTabPath(courseId) {
  return `/course/${encodeURIComponent(courseId)}/${VERIFIED_TAB_SLUG}`;
}

export function getVerifiedTabUrl(courseId) {
  const path = getVerifiedTabPath(courseId);
  const learningBase = getConfig().LEARNING_BASE_URL;
  if (learningBase) {
    return `${learningBase.replace(/\/$/, '')}${path}`;
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}${path}`;
  }
  return path;
}

export function courseOffersFullAccessTrack(courseModes) {
  return (courseModes || []).some(({ slug }) => slug === 'verified');
}

export function hasFullAccessEnrollment(enrollmentMode) {
  return Boolean(enrollmentMode && VERIFIED_MODES.includes(enrollmentMode));
}

/**
 * @param {object|null|undefined} verifiedMode
 * @param {string|null|undefined} enrollmentMode
 * @param {Array<{ slug: string }>|null|undefined} courseModes
 */
export function shouldShowVerifiedTab({
  verifiedMode,
  isEnrolled,
  enrollmentMode,
  courseModes,
}) {
  if (!isEnrolled || !courseOffersFullAccessTrack(courseModes)) {
    return false;
  }
  return Boolean(verifiedMode?.upgradeUrl) || hasFullAccessEnrollment(enrollmentMode);
}

/**
 * Inject Robbo full-access tab when upgrade is available or already purchased.
 *
 * @param {Array<{ slug: string, title: string, url: string }>|undefined|null} tabs
 * @param {{
 *   courseId: string,
 *   verifiedMode?: object,
 *   isEnrolled?: boolean,
 *   enrollmentMode?: string,
 *   courseModes?: Array<{ slug: string }>,
 * }} context
 */
export function buildNavigationTabs(tabs, {
  courseId,
  verifiedMode,
  isEnrolled,
  enrollmentMode,
  courseModes,
}) {
  const filtered = filterNavigationTabs(tabs);
  if (!shouldShowVerifiedTab({
    verifiedMode, isEnrolled, enrollmentMode, courseModes,
  }) || !courseId) {
    return filtered;
  }
  if (filtered.some((tab) => tab.slug === VERIFIED_TAB_SLUG)) {
    return filtered;
  }

  const verifiedTab = {
    slug: VERIFIED_TAB_SLUG,
    title: 'Full access',
    url: getVerifiedTabUrl(courseId),
  };

  const progressIndex = filtered.findIndex((tab) => tab.slug === 'progress');
  const insertAt = progressIndex >= 0 ? progressIndex + 1 : filtered.length;

  return [
    ...filtered.slice(0, insertAt),
    verifiedTab,
    ...filtered.slice(insertAt),
  ];
}
