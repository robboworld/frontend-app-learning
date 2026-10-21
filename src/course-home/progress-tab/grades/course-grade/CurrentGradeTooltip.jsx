import PropTypes from 'prop-types';

import { getLocale, isRtl, useIntl } from '@edx/frontend-platform/i18n';
import { Popover } from '@openedx/paragon';
import { useContextId } from '../../../../data/hooks';

import { useModel } from '../../../../generic/model-store';
import GradeBarLabel from './GradeBarLabel';

import messages from '../messages';

// Modifications Copyright (C) 2026 Robbo. See NOTICE at repository root.
// The percent is CurrentGradeLabel, laid out next to the bar's SVG (see GradeBarLabel); this part
// draws the mark on the bar.
export const CurrentGradeLabel = ({ tooltipClassName }) => {
  const courseId = useContextId();
  const {
    courseGrade: {
      isPassing,
      percent,
    },
  } = useModel('progress', courseId);
  const currentGrade = Number((percent * 100).toFixed(0));
  const isLocaleRtl = isRtl(getLocale());

  return (
    <GradeBarLabel
      id={`${isPassing ? 'passing' : 'non-passing'}-grade-tooltip`}
      placement="top"
      position={Math.min(isLocaleRtl ? 100 - currentGrade : currentGrade, 100)}
      className={tooltipClassName}
    >
      <Popover.Content data-testid="currentGradeTooltipContent" className={isPassing ? 'text-white' : 'text-dark-700'}>
        {currentGrade.toFixed(0)}{isLocaleRtl ? '\u200f' : ''}%
      </Popover.Content>
    </GradeBarLabel>
  );
};

CurrentGradeLabel.defaultProps = {
  tooltipClassName: '',
};

CurrentGradeLabel.propTypes = {
  tooltipClassName: PropTypes.string,
};

const CurrentGradeTooltip = () => {
  const intl = useIntl();
  const courseId = useContextId();

  const {
    courseGrade: {
      percent,
    },
  } = useModel('progress', courseId);

  const currentGrade = Number((percent * 100).toFixed(0));

  let currentGradeDirection = currentGrade < 50 ? '' : '-';

  const isLocaleRtl = isRtl(getLocale());

  if (isLocaleRtl) {
    currentGradeDirection = currentGrade < 50 ? '-' : '';
  }

  return (
    <>
      <rect className="grade-bar__divider" x={`${Math.min(...[isLocaleRtl ? 100 - currentGrade : currentGrade, 100])}%`} style={{ transform: 'translateY(2.61em)' }} />
      <text
        className="x-small"
        textAnchor={currentGrade < 50 ? 'start' : 'end'}
        x={`${Math.min(...[isLocaleRtl ? 100 - currentGrade : currentGrade, 100])}%`}
        y="20px"
        style={{ transform: `translateX(${currentGradeDirection}3.4em)` }}
      >
        {intl.formatMessage(messages.currentGradeLabel)}
      </text>
    </>
  );
};

export default CurrentGradeTooltip;
