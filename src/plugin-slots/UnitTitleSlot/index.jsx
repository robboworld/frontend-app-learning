/** Modifications Copyright (C) 2026 Robbo. See NOTICE at repository root. */

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { useIntl } from '@edx/frontend-platform/i18n';
import { breakpoints, useWindowSize } from '@openedx/paragon';

import { BookmarkButton } from '@src/courseware/course/bookmark';
import { useCoursewareMobileUnitNavPortal } from '@src/courseware/CoursewareMobileUnitNavPortalContext';
import messages from '@src/courseware/course/sequence/messages';

const UnitTitleSlot = ({
  unitId,
  unit,
  isEnabledOutlineSidebar,
  renderUnitNavigation,
}) => {
  const { formatMessage } = useIntl();
  const isProcessing = unit.bookmarkedUpdateState === 'loading';
  const { portalTarget } = useCoursewareMobileUnitNavPortal();
  const windowWidth = useWindowSize().width;
  const useToolbarUnitNav = windowWidth !== undefined
    && windowWidth < breakpoints.extraLarge.minWidth;
  const portaledTopNav = isEnabledOutlineSidebar && useToolbarUnitNav && portalTarget;
  const inlineTopNav = isEnabledOutlineSidebar && !(useToolbarUnitNav && portalTarget);

  return (
    <PluginSlot
      id="org.openedx.frontend.learning.unit_title.v1"
      idAliases={['unit_title_slot']}
      pluginProps={{
        unitId,
        unit,
        isEnabledOutlineSidebar,
        renderUnitNavigation,
      }}
    >
      <div className="d-flex justify-content-between">
        <div className="mb-0">
          <h3 className="h3">{unit.title}</h3>
        </div>
        {inlineTopNav && renderUnitNavigation(true)}
      </div>
      {portaledTopNav && createPortal(renderUnitNavigation(true), portalTarget)}
      <p className="sr-only">{formatMessage(messages.headerPlaceholder)}</p>
      <BookmarkButton
        unitId={unit.id}
        isBookmarked={unit.bookmarked}
        isProcessing={isProcessing}
      />
    </PluginSlot>
  );
};

UnitTitleSlot.propTypes = {
  unitId: PropTypes.string.isRequired,
  unit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    bookmarkedUpdateState: PropTypes.string.isRequired,
  }).isRequired,
  isEnabledOutlineSidebar: PropTypes.bool.isRequired,
  renderUnitNavigation: PropTypes.func.isRequired,
};

export default UnitTitleSlot;
