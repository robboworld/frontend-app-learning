/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 * Ids with «.v2»: the text changed meaning (no «preview mode», no «graded assignments») — new ids keep old
 * translations from showing up.
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
    id: 'robbo.verifiedTab.body.v2',
    defaultMessage: 'You are learning for free. Full access opens:',
    description: 'Intro paragraph on the full-access upgrade tab, followed by what full access includes',
  },
  includePaidContent: {
    id: 'robbo.verifiedTab.include.paidContent',
    defaultMessage: 'All course materials, including locked sections and assignments',
    description: 'What full access includes: the course has parts for full access only',
  },
  includeCertificate: {
    id: 'robbo.verifiedTab.include.certificate',
    defaultMessage: 'The course completion certificate at no extra cost',
    description: 'What full access includes: the paid certificate is free with full access',
  },
  includeFullAccess: {
    id: 'robbo.verifiedTab.include.fullAccess',
    defaultMessage: 'Full access to the whole course',
    description: 'What full access includes when the course sets nothing more specific',
  },
  alreadyVerifiedHeading: {
    id: 'robbo.verifiedTab.alreadyVerifiedHeading',
    defaultMessage: 'You have full access',
    description: 'Heading when learner already has full access',
  },
  alreadyVerifiedBody: {
    id: 'robbo.verifiedTab.alreadyVerifiedBody.v2',
    defaultMessage: 'All course materials are open to you.',
    description: 'Body when learner already has full access',
  },
  unavailable: {
    id: 'robbo.verifiedTab.unavailable',
    defaultMessage: 'Full access is not available for your enrollment at this time.',
    description: 'Shown when full-access upgrade cannot be offered',
  },
});

export default messages;
