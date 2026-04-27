/**
 * Course tabs excluded from the learning MFE top nav (Robbo).
 */
export function isTeamsCourseTab(tab) {
  if (!tab) {
    return false;
  }
  if (tab.slug === 'teams') {
    return true;
  }
  if (!tab.url) {
    return false;
  }
  try {
    const { pathname } = new URL(tab.url, 'http://placeholder.local');
    return pathname === '/teams' || pathname.endsWith('/teams/') || pathname.includes('/teams/');
  } catch (e) {
    return tab.url.includes('/teams');
  }
}

export function filterNavigationTabs(tabs) {
  if (!tabs?.length) {
    return tabs || [];
  }
  return tabs.filter((tab) => !isTeamsCourseTab(tab));
}
