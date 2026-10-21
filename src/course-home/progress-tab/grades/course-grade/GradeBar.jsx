import PropTypes from 'prop-types';

import { getLocale, isRtl, useIntl } from '@edx/frontend-platform/i18n';
import { useContextId } from '../../../../data/hooks';
import { useModel } from '../../../../generic/model-store';
import CurrentGradeTooltip, { CurrentGradeLabel } from './CurrentGradeTooltip';
import PassingGradeTooltip, { PassingGradeLabel } from './PassingGradeTooltip';

import messages from '../messages';

const GradeBar = ({ passingGrade }) => {
  const intl = useIntl();
  const courseId = useContextId();

  const {
    courseGrade: {
      isPassing,
      percent,
    },
    gradesFeatureIsFullyLocked,
  } = useModel('progress', courseId);

  const currentGrade = Number((percent * 100).toFixed(0));

  const lockedTooltipClassName = gradesFeatureIsFullyLocked ? 'locked-overlay' : '';

  const adjustedRtlStyle = (percentOffest) => (isRtl(getLocale()) ? { transform: `translateX(${100 - percentOffest}%)` } : {});

  return (
    <div className="col-12 col-sm-6 align-self-center p-0">
      <div className="sr-only">{intl.formatMessage(messages.courseGradeBarAltText, { currentGrade, passingGrade })}</div>
      {/* Modifications Copyright (C) 2026 Robbo. See NOTICE at repository root.
          The percent bubbles sit next to the SVG in one box with it (GradeBarLabel). */}
      <div className="grade-bar-box">
        <svg width="100%" height="100px" className="grade-bar" aria-hidden="true">
          <g style={{ transform: 'translateY(2.61em)' }}>
            <rect className="grade-bar__base" width="100%" />
            <rect className="grade-bar--passing" width={`${passingGrade}%`} style={adjustedRtlStyle(passingGrade)} />
            <rect className={`grade-bar--current-${isPassing ? 'passing' : 'non-passing'}`} width={`${currentGrade}%`} style={adjustedRtlStyle(currentGrade)} />

            {/* Start divider */}
            <rect className="grade-bar__divider" />
            {/* End divider */}
            <rect className="grade-bar__divider" x="99.7%" />
          </g>
          <PassingGradeTooltip passingGrade={passingGrade} />
          <CurrentGradeTooltip />
        </svg>
        <PassingGradeLabel passingGrade={passingGrade} tooltipClassName={lockedTooltipClassName} />
        <CurrentGradeLabel tooltipClassName={lockedTooltipClassName} />
      </div>
    </div>
  );
};

GradeBar.propTypes = {
  passingGrade: PropTypes.number.isRequired,
};

export default GradeBar;
