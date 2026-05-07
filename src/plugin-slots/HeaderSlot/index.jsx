import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';

import { RobboHeader as Header } from '../../robbo-layout';

const HeaderSlot = ({
  courseOrg, courseNumber, courseTitle, showUserDropdown,
}) => (
  <PluginSlot
    id="org.openedx.frontend.layout.header_learning.v1"
    idAliases={['header_slot']}
    slotOptions={{
      mergeProps: true,
    }}
    pluginProps={{
      courseOrg,
      courseNumber,
      courseTitle,
      showUserDropdown,
    }}
  >
    <Header
      collapseNavIntoUserMenuOnNarrow
      showUserDropdown={showUserDropdown}
    />
  </PluginSlot>
);

HeaderSlot.propTypes = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
  showUserDropdown: PropTypes.bool,
};

HeaderSlot.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true,
};

export default HeaderSlot;
