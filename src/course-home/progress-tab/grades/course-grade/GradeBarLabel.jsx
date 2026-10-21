/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 *
 * A percent bubble of the grade bar («0%» above the current grade, «60%» below the passing one).
 * It is laid out next to the bar's SVG instead of an always-open OverlayTrigger: Popper placed that
 * one in <body> once and did not follow when content above the bar loaded or changed, so the
 * percents stayed where the bar used to be. ``position`` is the point on the bar, % of its width.
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Popover } from '@openedx/paragon';

// Near the ends the bubble leans inwards (the arrow stays on the point) instead of sticking out.
const edgeOf = (position) => {
  if (position < 5) {
    return 'start';
  }
  return position > 95 ? 'end' : 'center';
};

const GradeBarLabel = ({
  id, placement, position, className, children,
}) => (
  <Popover
    id={id}
    placement={placement}
    aria-hidden="true"
    className={classNames('grade-bar__label', `grade-bar__label--${edgeOf(position)}`, className)}
    style={{ left: `${position}%` }}
  >
    {children}
  </Popover>
);

GradeBarLabel.defaultProps = {
  className: '',
};

GradeBarLabel.propTypes = {
  id: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom']).isRequired,
  position: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GradeBarLabel;
