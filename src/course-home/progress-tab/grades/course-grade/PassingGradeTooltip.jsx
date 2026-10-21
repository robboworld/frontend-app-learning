import PropTypes from 'prop-types';

import { getLocale, isRtl, useIntl } from '@edx/frontend-platform/i18n';
import { Popover } from '@openedx/paragon';

import GradeBarLabel from './GradeBarLabel';
import messages from '../messages';

// Modifications Copyright (C) 2026 Robbo. See NOTICE at repository root.
// The percent is PassingGradeLabel, laid out next to the bar's SVG (see GradeBarLabel); this part
// draws the point on the bar.
export const PassingGradeLabel = ({ passingGrade, tooltipClassName }) => {
  const isLocaleRtl = isRtl(getLocale());
  return (
    <GradeBarLabel
      id="minimum-grade-tooltip"
      placement="bottom"
      position={isLocaleRtl ? 100 - passingGrade : passingGrade}
      className={tooltipClassName}
    >
      <Popover.Content className="text-white">
        {passingGrade}{isLocaleRtl && '\u200f'}%
      </Popover.Content>
    </GradeBarLabel>
  );
};

PassingGradeLabel.defaultProps = {
  tooltipClassName: '',
};

PassingGradeLabel.propTypes = {
  passingGrade: PropTypes.number.isRequired,
  tooltipClassName: PropTypes.string,
};

const PassingGradeTooltip = ({ passingGrade }) => {
  const intl = useIntl();
  const isLocaleRtl = isRtl(getLocale());

  let passingGradeDirection = passingGrade < 50 ? '' : '-';

  if (isLocaleRtl) {
    passingGradeDirection = passingGrade < 50 ? '-' : '';
  }

  return (
    <>
      <circle className="grade-bar--passing" cx={`${isLocaleRtl ? 100 - passingGrade : passingGrade}%`} cy="50%" r="4.5" />

      <text
        className="x-small"
        textAnchor={passingGrade < 50 ? 'start' : 'end'}
        x={`${isLocaleRtl ? 100 - passingGrade : passingGrade}%`}
        y="90px"
        style={{ transform: `translateX(${passingGradeDirection}3.4em)` }}
      >
        {intl.formatMessage(messages.passingGradeLabel)}
      </text>
    </>
  );
};

PassingGradeTooltip.propTypes = {
  passingGrade: PropTypes.number.isRequired,
};

export default PassingGradeTooltip;
