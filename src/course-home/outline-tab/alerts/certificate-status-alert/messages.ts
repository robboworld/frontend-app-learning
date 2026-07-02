import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  certStatusEarnedNotAvailableHeader: {
    id: 'cert.alert.earned.unavailable.header.v2',
    defaultMessage: 'Your grade and certificate status will be available soon.',
    description: 'Header alerting the user that their certificate will be available soon.',
  },
  certStatusDownloadableHeader: {
    id: 'cert.alert.earned.ready.header',
    defaultMessage: 'Congratulations! Your certificate is ready.',
    description: 'Header alerting the user that their certificate is ready.',
  },
  certStatusNotPassingHeader: {
    id: 'cert.alert.notPassing.header',
    defaultMessage: 'You are not yet eligible for a certificate',
  },
  certStatusNotPassingButton: {
    id: 'cert.alert.notPassing.button',
    defaultMessage: 'View grades',
  },
  certStatusGeneratingHeader: {
    id: 'cert.alert.generating.header',
    defaultMessage: "We're working on it...",
    description: 'Header while the learner certificate is being generated.',
  },
  certStatusGeneratingBody: {
    id: 'cert.alert.generating.body',
    defaultMessage: 'Your certificate is being created. This page will update automatically.',
    description: 'Body text while the learner certificate is being generated.',
  },
  certStatusGeneratingButton: {
    id: 'cert.alert.generating.button',
    defaultMessage: 'Generating certificate',
    description: 'Button label while the learner certificate is being generated.',
  },
});

export default messages;
