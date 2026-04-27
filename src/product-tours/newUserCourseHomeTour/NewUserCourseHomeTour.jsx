import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import {
  DismissButtonFormattedMessage,
  NextButtonFormattedMessage,
  OkayButtonFormattedMessage,
} from '../GenericTourFormattedMessages';

const outlineCheckpoint = {
  body: <FormattedMessage
    id="tours.outlineCheckpoint.body"
    defaultMessage="You can explore sections of the course using the outline below."
  />,
  placement: 'top',
  target: '#courseHome-outline',
  title: <FormattedMessage
    id="tours.outlineCheckpoint.title"
    defaultMessage="Take the course!"
  />,
};

const tabNavigationCheckpoint = {
  body: <FormattedMessage
    id="tours.tabNavigationCheckpoint.body"
    defaultMessage="These tabs can be used to access other course materials, such as your progress, syllabus, etc."
  />,
  placement: 'bottom',
  target: '#courseHome-datesTabLink',
  title: <FormattedMessage
    id="tours.tabNavigationCheckpoint.title"
    defaultMessage="Additional course resources"
  />,
};

const upgradeCheckpoint = {
  body: <FormattedMessage
    id="tours.upgradeCheckpoint.body"
    defaultMessage="Work towards a certificate and gain full access to course materials. Upgrade now!"
  />,
  placement: 'left',
  target: '#courseHome-upgradeNotification',
  title: <FormattedMessage
    id="tours.upgradeCheckpoint.title"
    defaultMessage="Unlock your course"
  />,
};

const newUserCourseHomeTour = ({
  enabled,
  onDismiss,
  onEnd,
}) => ({
  advanceButtonText: <NextButtonFormattedMessage />,
  checkpoints: [
    outlineCheckpoint,
    tabNavigationCheckpoint,
    upgradeCheckpoint,
  ],
  dismissButtonText: <DismissButtonFormattedMessage />,
  enabled,
  endButtonText: <OkayButtonFormattedMessage />,
  onDismiss,
  onEnd,
  onEscape: onDismiss,
  tourId: 'newUserCourseHomeTour',
});

export default newUserCourseHomeTour;
