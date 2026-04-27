import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { useWindowSize } from '@openedx/paragon';
import CertificateStatus from '../../course-home/progress-tab/certificate-status/CertificateStatus';

const ProgressTabCertificateStatusMainBodySlot = () => {
  const windowWidth = useWindowSize().width;
  return (
    <PluginSlot
      id="org.openedx.frontend.learning.progress_tab_certificate_status_main_body.v1"
      idAliases={['progress_tab_certificate_status_main_body_slot']}
    >
      {Boolean(windowWidth) && <CertificateStatus />}
    </PluginSlot>
  );
};

ProgressTabCertificateStatusMainBodySlot.propTypes = {};

export default ProgressTabCertificateStatusMainBodySlot;
