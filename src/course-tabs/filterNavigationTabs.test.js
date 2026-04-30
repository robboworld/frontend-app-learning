import { filterNavigationTabs, isTeamsCourseTab, isProgressOrDatesCourseTab } from './filterNavigationTabs';

describe('filterNavigationTabs', () => {
  const tabs = [
    { slug: 'courseware', title: 'Содержание', url: 'http://x/course/.../courseware' },
    { slug: 'teams', title: 'Команды', url: 'http://local.openedx.io:8000/courses/course-v1:org+course+run/teams/' },
    { slug: 'discussion', title: 'Обсуждение', url: 'http://x/discussion' },
    { slug: 'progress', title: 'Прогресс', url: 'http://x/progress' },
    { slug: 'dates', title: 'Даты', url: 'http://x/dates' },
  ];

  it('removes teams tab by slug', () => {
    const out = filterNavigationTabs(tabs);
    expect(out.map((t) => t.slug)).toEqual(['courseware', 'discussion']);
  });

  it('removes progress and dates tabs', () => {
    const noTeams = tabs.filter((t) => t.slug !== 'teams');
    const out = filterNavigationTabs(noTeams);
    expect(out.map((t) => t.slug)).toEqual(['courseware', 'discussion']);
  });

  it('isTeamsCourseTab matches LMS teams URL', () => {
    expect(isTeamsCourseTab(tabs[1])).toBe(true);
    expect(isTeamsCourseTab(tabs[0])).toBe(false);
  });

  it('isProgressOrDatesCourseTab matches slug', () => {
    expect(isProgressOrDatesCourseTab(tabs[3])).toBe(true);
    expect(isProgressOrDatesCourseTab(tabs[4])).toBe(true);
    expect(isProgressOrDatesCourseTab(tabs[0])).toBe(false);
  });
});
