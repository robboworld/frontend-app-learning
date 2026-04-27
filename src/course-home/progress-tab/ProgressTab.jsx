import React from 'react';
import { useWindowSize } from '@openedx/paragon';
import { useContextId } from '../../data/hooks';

import CourseCompletion from './course-completion/CourseCompletion';
import ProgressHeader from './ProgressHeader';

import ProgressTabCertificateStatusMainBodySlot from '../../plugin-slots/ProgressTabCertificateStatusMainBodySlot';
import ProgressTabCourseGradeSlot from '../../plugin-slots/ProgressTabCourseGradeSlot';
import ProgressTabGradeBreakdownSlot from '../../plugin-slots/ProgressTabGradeBreakdownSlot';
import { useModel } from '../../generic/model-store';

const ProgressTab = () => {
  const courseId = useContextId();
  const { disableProgressGraph } = useModel('progress', courseId);

  const windowWidth = useWindowSize().width;
  if (windowWidth === undefined) {
    return null;
  }

  return (
    <>
      <ProgressHeader />
      <div className="row w-100 m-0">
        <div className="col-12 p-0">
          {!disableProgressGraph && <CourseCompletion />}
          <ProgressTabCertificateStatusMainBodySlot />
          <ProgressTabCourseGradeSlot />
          <ProgressTabGradeBreakdownSlot />
        </div>
      </div>
    </>
  );
};

export default ProgressTab;
