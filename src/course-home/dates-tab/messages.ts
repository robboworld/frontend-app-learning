import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  completed: {
    id: 'learning.dates.badge.completed',
    defaultMessage: 'Completed',
    description: 'shown as label for the assignments which learner has completed.',
  },
  dueNext: {
    id: 'learning.dates.badge.dueNext',
    defaultMessage: 'Due next',
    description: 'Shown as label for the assignment which date is in the future',
  },
  pastDue: {
    id: 'learning.dates.badge.pastDue',
    defaultMessage: 'Past due',
    description: 'Shown as label for the assignments which deadline has passed',
  },
  title: {
    id: 'learning.dates.title',
    defaultMessage: 'Important dates',
    description: 'The title of dates tab (course timeline).',
  },
  today: {
    id: 'learning.dates.badge.today',
    defaultMessage: 'Today',
    description: 'Label used when the scheduled date for the assignment matches the current day',
  },
  unreleased: {
    id: 'learning.dates.badge.unreleased',
    defaultMessage: 'Not yet released',
    description: 'Shown as label for assignments which date is unknown yet',
  },
  verifiedOnly: {
    id: 'learning.dates.badge.verifiedOnly',
    defaultMessage: 'Verified only',
    description: 'Shown as label for assignments which learner has no access to.',
  },
  courseStarts: {
    id: 'robbo.dates.courseStarts',
    defaultMessage: 'Course starts',
    description: 'Timeline label for the course start date from the dates API.',
  },
  courseEnds: {
    id: 'robbo.dates.courseEnds',
    defaultMessage: 'Course ends',
    description: 'Timeline label for the course end date from the dates API.',
  },
  enrollmentDate: {
    id: 'robbo.dates.enrollmentDate',
    defaultMessage: 'Enrollment Date',
    description: 'Timeline label when self-paced enrollment is after course start.',
  },
  courseEndsDescription: {
    id: 'robbo.dates.courseEndsDescription',
    defaultMessage: 'After the course ends, the course content will be archived and no longer active.',
    description: 'Description shown before course end for non-certificate learners.',
  },
  courseEndsDescriptionCertificate: {
    id: 'robbo.dates.courseEndsDescriptionCertificate',
    defaultMessage:
      'After this date, the course will be archived, which means you can review the course content but can no longer participate in graded assignments or work towards earning a certificate.',
    description: 'Description shown before course end for certificate-track learners.',
  },
  courseArchivedDescription: {
    id: 'robbo.dates.courseArchivedDescription',
    defaultMessage: 'This course is archived, which means you can review course content but it is no longer active.',
    description: 'Description shown after the course has ended.',
  },
});

export default messages;
