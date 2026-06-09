/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@openedx/paragon';

import { useModel } from '../../generic/model-store';
import UpgradeButton from '../../generic/upgrade-button/UpgradeButton';
import {
  FullAccessBullet,
  UnlockGradedBullet,
} from '../../generic/upsell-bullets/UpsellBullets';
import { VERIFIED_MODES } from '../../constants';
import messages from './messages';

const VerifiedTab = () => {
  const intl = useIntl();
  const { courseId } = useSelector((state) => state.courseHome);

  const {
    isEnrolled,
    org,
    verifiedMode,
    enrollmentMode: metaEnrollmentMode,
  } = useModel('courseHomeMeta', courseId);

  const { offer } = useModel('verified', courseId);

  if (!courseId) {
    return null;
  }

  const enrollmentMode = metaEnrollmentMode;
  const isVerifiedEnrollment = enrollmentMode && VERIFIED_MODES.includes(enrollmentMode);

  const logUpgradeClick = () => {
    sendTrackEvent('edx.bi.ecommerce.upsell_links_clicked', {
      org_key: org,
      courserun_key: courseId,
      linkCategory: 'verified_tab',
      linkName: 'verified_tab_upgrade',
      linkType: 'button',
      pageName: 'verified_tab',
    });
  };

  return (
    <div className="course-verified-tab">
      <div role="heading" aria-level="1" className="h2 my-3 course-verified-tab__title">
        {intl.formatMessage(messages.title)}
      </div>

      {isVerifiedEnrollment && (
        <Card className="course-verified-tab__card">
          <Card.Section>
            <h2 className="h3 mb-3">{intl.formatMessage(messages.alreadyVerifiedHeading)}</h2>
            <p className="mb-0">{intl.formatMessage(messages.alreadyVerifiedBody)}</p>
          </Card.Section>
        </Card>
      )}

      {!isVerifiedEnrollment && verifiedMode?.upgradeUrl && (
        <Card className="course-verified-tab__card">
          <Card.Section>
            <h2 className="h3 mb-3">{intl.formatMessage(messages.heading)}</h2>
            <p className="mb-4">{intl.formatMessage(messages.body)}</p>
            <ul className="fa-ul mb-4 course-verified-tab__benefits">
              <li className="upsell-bullet">
                <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
                {intl.formatMessage(messages.certificateBullet)}
              </li>
              <UnlockGradedBullet />
              <FullAccessBullet />
            </ul>
            <UpgradeButton
              verifiedMode={verifiedMode}
              offer={offer}
              onClick={logUpgradeClick}
              size="lg"
              block
              className="course-verified-tab__upgrade-btn"
            />
          </Card.Section>
        </Card>
      )}

      {!isVerifiedEnrollment && isEnrolled && !verifiedMode?.upgradeUrl && (
        <p className="course-verified-tab__unavailable">
          {intl.formatMessage(messages.unavailable)}
        </p>
      )}
    </div>
  );
};

export default VerifiedTab;
