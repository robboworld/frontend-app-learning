import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notPassingHeader: {
    id: 'progress.certificateStatus.notPassingHeader',
    defaultMessage: 'Certificate status',
    description: 'Header text when learner certifcate status is not passing',
  },
  notPassingBody: {
    id: 'progress.certificateStatus.notPassingBody',
    defaultMessage: 'In order to qualify for a certificate, you must have a passing grade.',
    description: 'Body text when learner certifcate status is not passing',
  },
  inProgressHeader: {
    id: 'progress.certificateStatus.inProgressHeader',
    defaultMessage: 'More content is coming soon!',
    description: 'Header text when learner certifcate is in progress',
  },
  inProgressBody: {
    id: 'progress.certificateStatus.inProgressBody',
    defaultMessage: 'It looks like there is more content in this course that will be released in the future. Look out for email updates or check back on your course for when this content will be available.',
    description: 'Body text when learner certifcate is in progress',
  },
  requestableHeader: {
    id: 'progress.certificateStatus.requestableHeader',
    defaultMessage: 'Certificate status',
    description: 'Header text when learner certifcate status is requestable',
  },
  requestableBody: {
    id: 'progress.certificateStatus.requestableBody',
    defaultMessage: 'Congratulations, you qualified for a certificate! In order to access your certificate, request it below.',
    description: 'Body text when learner certifcate status is requestable',
  },
  requestableButton: {
    id: 'progress.certificateStatus.requestableButton',
    defaultMessage: 'Request certificate',
    description: 'Button text when learner certifcate status is requestable',
  },
  unverifiedHeader: {
    id: 'progress.certificateStatus.unverifiedHeader',
    defaultMessage: 'Certificate status',
    description: 'Header text when learner certifcate status is unverified',
  },
  unverifiedButton: {
    id: 'progress.certificateStatus.unverifiedButton',
    defaultMessage: 'Verify ID',
    description: 'Button text when learner certifcate status is unverified',
  },
  unverifiedPendingBody: {
    id: 'progress.certificateStatus.courseCelebration.verificationPending',
    defaultMessage: 'Your ID verification is pending and your certificate will be available once approved.',
    description: 'Body text when learner certifcate status is unverified pending',
  },
  downloadableHeader: {
    id: 'progress.certificateStatus.downloadableHeader',
    defaultMessage: 'Your certificate is available!',
    description: 'Header text when the certifcate is available',
  },
  viewableButton: {
    id: 'progress.certificateStatus.viewableButton',
    defaultMessage: 'View my certificate',
    description: 'Button text which view or links to the certifcate',
  },
  notAvailableHeader: {
    id: 'progress.certificateStatus.notAvailableHeader',
    defaultMessage: 'Certificate status',
    description: 'Header text when the certifcate is not available',
  },
  notAvailableEndDateBody: {
    id: 'progress.certificateBody.notAvailable.endDate',
    defaultMessage: 'Final grades and any earned certificates are scheduled to be available after {endDate}.',
    description: 'Shown for learners who have finished a course before grades and certificates are available.',
  },
  // Robbo: the course has no end date, so there is no date to show
  robboNotAvailableNoEndDateBody: {
    id: 'robbo.progress.certificateBody.notAvailable.noEndDate',
    defaultMessage: 'Final grades and any earned certificates will be available after the course ends. The end date has not been set yet.',
    description: 'Shown instead of the end date when grades and certificates are not available yet and the course has no end date.',
  },
  upgradeHeader: {
    id: 'progress.certificateStatus.upgradeHeader',
    defaultMessage: 'Earn a certificate',
    description: 'Header text when the learner needs to upgrade to earn a certifcate ',
  },
  upgradeBody: {
    id: 'progress.certificateStatus.upgradeBody',
    defaultMessage: 'You are in an audit track and do not qualify for a certificate. In order to work towards a certificate, upgrade your course today.',
    description: 'Body text when the learner needs to upgrade to earn a certifcate ',
  },
  upgradeButton: {
    id: 'progress.certificateStatus.upgradeButton',
    defaultMessage: 'Upgrade now',
    description: 'Button text which leaner needs to upgrade to get the certifcate',
  },
  unverifiedHomeHeader: {
    id: 'progress.certificateStatus.unverifiedHomeHeader.v2',
    defaultMessage: 'Verify your identity to qualify for a certificate.',
    description: 'Header text when the learner needs to do verification to earn a certifcate ',
  },
  unverifiedHomeButton: {
    id: 'progress.certificateStatus.unverifiedHomeButton',
    defaultMessage: 'Verify my ID',
    description: 'Button text which leaner needs to do verification to earn a certifcate',
  },
  unverifiedHomeBody: {
    id: 'progress.certificateStatus.unverifiedHomeBody',
    defaultMessage: 'In order to generate a certificate for this course, you must complete the ID verification process.',
    description: 'Body text when the learner needs to do verification to earn a certifcate',
  },
  // Robbo: paid certificate (edx-platform robbo_certificates.offers, cert status «robbo_purchase»)
  robboPurchaseHeader: {
    id: 'robbo.progress.certificateStatus.purchaseHeader',
    defaultMessage: 'Certificate',
    description: 'Header of the progress page certificate block when the course certificate is paid',
  },
  robboPurchaseAvailableBody: {
    id: 'robbo.progress.certificateStatus.purchaseAvailableBody',
    defaultMessage: 'You passed the course with {percent}%. You can get a certificate for {price}.',
    description: 'The learner passed a course with a paid certificate and can buy it',
  },
  robboPurchaseAvailableButton: {
    id: 'robbo.progress.certificateStatus.purchaseAvailableButton',
    defaultMessage: 'Get a certificate',
    description: 'Button that opens the paid certificate checkout',
  },
  robboPurchaseBelowThresholdBody: {
    id: 'robbo.progress.certificateStatus.purchaseBelowThresholdBody',
    defaultMessage: 'A certificate is given for a result of {minPercent}% or more. Your result is {percent}%.',
    description: 'The learner passed the course but is below the grade needed for the paid certificate',
  },
  robboPurchasePendingBody: {
    id: 'robbo.progress.certificateStatus.purchasePendingBody',
    defaultMessage: 'Your payment is being processed. The certificate will appear here a few minutes after the payment.',
    description: 'The learner started paying for the certificate a moment ago',
  },
  robboPurchasePendingButton: {
    id: 'robbo.progress.certificateStatus.purchasePendingButton',
    defaultMessage: 'Check the payment',
    description: 'Button that opens the receipt of the started certificate payment',
  },
});

export default messages;
