/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 */

import messages from './messages';

/** English strings from LMS `date_summary` when locale is not applied on the API. */
const DATE_SUMMARY_LOOKUP = {
  'Course starts': messages.courseStarts,
  'Course ends': messages.courseEnds,
  'Enrollment Date': messages.enrollmentDate,
  'After the course ends, the course content will be archived and no longer active.': messages.courseEndsDescription,
  'After this date, the course will be archived, which means you can review the course content but can no longer participate in graded assignments or work towards earning a certificate.': messages.courseEndsDescriptionCertificate,
  'This course is archived, which means you can review course content but it is no longer active.': messages.courseArchivedDescription,
};

export function localizeDateSummaryString(intl, value) {
  if (!value) {
    return value;
  }
  const message = DATE_SUMMARY_LOOKUP[value];
  return message ? intl.formatMessage(message) : value;
}
