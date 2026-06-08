/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'robbo.verifiedTab.title',
    defaultMessage: 'Full access',
    description: 'Page title for the full-access upgrade tab in course home',
  },
  heading: {
    id: 'robbo.verifiedTab.heading',
    defaultMessage: 'Get full access',
    description: 'Heading on the full-access upgrade tab',
  },
  body: {
    id: 'robbo.verifiedTab.body',
    defaultMessage: 'You are enrolled in preview mode. Get full access to complete graded assignments and earn a certificate.',
    description: 'Intro paragraph on the full-access upgrade tab',
  },
  certificateBullet: {
    id: 'robbo.verifiedTab.certificateBullet',
    defaultMessage: 'Earn a certificate of completion for your resume.',
    description: 'Benefit bullet about the course certificate without external link',
  },
  alreadyVerifiedHeading: {
    id: 'robbo.verifiedTab.alreadyVerifiedHeading',
    defaultMessage: 'You have full access',
    description: 'Heading when learner already has full access',
  },
  alreadyVerifiedBody: {
    id: 'robbo.verifiedTab.alreadyVerifiedBody',
    defaultMessage: 'You can complete graded assignments and qualify for a certificate in this course.',
    description: 'Body when learner already has full access',
  },
  unavailable: {
    id: 'robbo.verifiedTab.unavailable',
    defaultMessage: 'Full access is not available for your enrollment at this time.',
    description: 'Shown when full-access upgrade cannot be offered',
  },
});

export default messages;
