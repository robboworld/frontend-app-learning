/**
 * Copyright (C) 2026 Robbo <https://robbo.ru>
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * Part of the Robbo Open edX MFE overrides. See NOTICE at repository root.
 */
import React from 'react';
import { initializeMockApp, render, screen } from '../../setupTest';
import { useModel } from '../../generic/model-store';
import VerifiedTab from './VerifiedTab';
import messages from './messages';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: (selector) => selector({ courseHome: { courseId: 'course-v1:edX+DemoX+Demo_Course' } }),
}));
jest.mock('../../generic/model-store', () => ({ useModel: jest.fn() }));

const verifiedMode = {
  price: 1990, currencySymbol: '₽', upgradeUrl: '/basket/add/?sku=FULL', sku: 'FULL',
};

const setMeta = (meta) => {
  useModel.mockImplementation((model) => (model === 'courseHomeMeta'
    ? {
      isEnrolled: true, org: 'edX', verifiedMode, enrollmentMode: 'honor', ...meta,
    }
    : { offer: null }));
};

describe('<VerifiedTab />', () => {
  beforeAll(() => initializeMockApp());

  it('lists what full access gives in this course', () => {
    setMeta({ robboFullAccessIncludes: ['paid_content', 'certificate'] });
    render(<VerifiedTab />);
    expect(screen.getByText(messages.body.defaultMessage)).toBeInTheDocument();
    expect(screen.getByText(messages.includePaidContent.defaultMessage)).toBeInTheDocument();
    expect(screen.getByText(messages.includeCertificate.defaultMessage)).toBeInTheDocument();
    expect(screen.queryByText(messages.includeFullAccess.defaultMessage)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /1990/ })).toHaveAttribute('href', '/basket/add/?sku=FULL');
  });

  it('promises nothing the course does not give', () => {
    setMeta({ robboFullAccessIncludes: [] });
    render(<VerifiedTab />);
    expect(screen.getByText(messages.includeFullAccess.defaultMessage)).toBeInTheDocument();
    expect(screen.queryByText(messages.includeCertificate.defaultMessage)).not.toBeInTheDocument();
  });

  it('tells a learner with full access that everything is open', () => {
    setMeta({ enrollmentMode: 'verified' });
    render(<VerifiedTab />);
    expect(screen.getByText(messages.alreadyVerifiedBody.defaultMessage)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /1990/ })).not.toBeInTheDocument();
  });
});
