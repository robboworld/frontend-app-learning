import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Spinner } from '@openedx/paragon';

import certMessages from './messages';

const DOTS_SEQUENCE = ['...', '', '.', '..'];

const GeneratingCertificateButtonLabel = ({ showSpinner = true }) => {
  const intl = useIntl();
  const [dotsIndex, setDotsIndex] = useState(0);
  const label = intl.formatMessage(certMessages.certStatusGeneratingButton);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDotsIndex((current) => (current + 1) % DOTS_SEQUENCE.length);
    }, 400);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="robbo-cert-generating-btn-label">
      {showSpinner && (
        <Spinner
          animation="border"
          size="sm"
          variant="light"
          screenReaderText={label}
        />
      )}
      <span aria-hidden="true">
        {label}
        {DOTS_SEQUENCE[dotsIndex]}
      </span>
    </span>
  );
};

GeneratingCertificateButtonLabel.propTypes = {
  showSpinner: PropTypes.bool,
};

export default GeneratingCertificateButtonLabel;
