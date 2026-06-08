import { getConfig } from '@edx/frontend-platform';

import {
  buildNavigationTabs,
  getVerifiedTabPath,
  getVerifiedTabUrl,
  shouldShowVerifiedTab,
  VERIFIED_TAB_SLUG,
} from './buildNavigationTabs';

jest.mock('@edx/frontend-platform', () => ({
  getConfig: jest.fn(() => ({ LEARNING_BASE_URL: 'http://apps.test:2000' })),
}));

describe('buildNavigationTabs', () => {
  const tabs = [
    { slug: 'outline', title: 'Содержание', url: 'http://x/home' },
    { slug: 'progress', title: 'Прогресс', url: 'http://x/progress' },
    { slug: 'dates', title: 'Даты', url: 'http://x/dates' },
  ];

  const courseModes = [{ slug: 'audit', name: 'Audit' }, { slug: 'verified', name: 'Verified' }];

  const verifiedMode = {
    upgradeUrl: 'http://lms/basket/add/?sku=TEST',
    price: 100,
    currency: 'RUB',
  };

  it('shouldShowVerifiedTab requires enrollment and upgrade URL', () => {
    expect(shouldShowVerifiedTab({
      verifiedMode, isEnrolled: true, courseModes,
    })).toBe(true);
    expect(shouldShowVerifiedTab({
      verifiedMode, isEnrolled: false, courseModes,
    })).toBe(false);
    expect(shouldShowVerifiedTab({
      verifiedMode: null, isEnrolled: true, courseModes,
    })).toBe(false);
  });

  it('shouldShowVerifiedTab stays visible after full access purchase', () => {
    expect(shouldShowVerifiedTab({
      verifiedMode: null,
      isEnrolled: true,
      enrollmentMode: 'verified',
      courseModes,
    })).toBe(true);
  });

  it('inserts verified tab after progress', () => {
    const out = buildNavigationTabs(tabs, {
      courseId: 'course-v1:ORG+NUM+RUN',
      verifiedMode,
      isEnrolled: true,
      courseModes,
    });
    expect(out.map((t) => t.slug)).toEqual(['outline', 'progress', VERIFIED_TAB_SLUG, 'dates']);
    expect(out[2].url).toBe(
      'http://apps.test:2000/course/course-v1%3AORG%2BNUM%2BRUN/verified',
    );
  });

  it('does not duplicate verified tab', () => {
    const withVerified = [...tabs, { slug: VERIFIED_TAB_SLUG, title: 'Verified', url: 'http://x/verified' }];
    const out = buildNavigationTabs(withVerified, {
      courseId: 'course-v1:ORG+NUM+RUN',
      verifiedMode,
      isEnrolled: true,
      courseModes,
    });
    expect(out.filter((t) => t.slug === VERIFIED_TAB_SLUG)).toHaveLength(1);
  });

  it('getVerifiedTabPath encodes course id', () => {
    expect(getVerifiedTabPath('course-v1:ORG+NUM+RUN')).toBe(
      '/course/course-v1%3AORG%2BNUM%2BRUN/verified',
    );
  });

  it('getVerifiedTabUrl uses LEARNING_BASE_URL', () => {
    getConfig.mockReturnValue({ LEARNING_BASE_URL: 'http://apps.test:2000/' });
    expect(getVerifiedTabUrl('course-v1:ORG+NUM+RUN')).toBe(
      'http://apps.test:2000/course/course-v1%3AORG%2BNUM%2BRUN/verified',
    );
  });
});
