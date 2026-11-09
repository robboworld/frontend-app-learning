/** Modifications Copyright (C) 2026 Robbo. See NOTICE at repository root. */

import * as discussions from './discussions';

// Robbo: the notifications tray only hosts upstream upgrade offers (verified mode),
// and its plugin slot is empty here, so the tray and its button are not shown.
export const SIDEBARS = {
  [discussions.ID]: {
    ID: discussions.ID,
    Sidebar: discussions.Sidebar,
    Trigger: discussions.Trigger,
  },
};

export const SIDEBAR_ORDER = [
  discussions.ID,
];
