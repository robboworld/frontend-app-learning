// Copyright (C) 2026 Robbo <https://robbo.ru>
// SPDX-License-Identifier: AGPL-3.0-only
// Part of the Robbo Open edX distribution (frontend-app-learning). See NOTICE at repository root.

import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

const CoursewareMobileUnitNavPortalContext = createContext({
  portalTarget: null,
  setPortalTarget: () => {},
});

export const CoursewareMobileUnitNavPortalProvider = ({ children }) => {
  const [portalTarget, setPortalTarget] = useState(null);
  const value = useMemo(() => ({ portalTarget, setPortalTarget }), [portalTarget]);
  return (
    <CoursewareMobileUnitNavPortalContext.Provider value={value}>
      {children}
    </CoursewareMobileUnitNavPortalContext.Provider>
  );
};

export const useCoursewareMobileUnitNavPortal = () => useContext(CoursewareMobileUnitNavPortalContext);
