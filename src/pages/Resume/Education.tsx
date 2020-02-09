import React from 'react';

import ResumeSection from './ResumeSection';
import ResumeSubsection from './ResumeSubsection';


const Education = () => (
  <ResumeSection title="Education">
    <ResumeSubsection
      title="Ph.D. in Computational and Applied Mathematics"
      date="May 2015"
      location="Rice University"
    />

    <ResumeSubsection
      title="Masters in Computational and Applied Mathematics"
      date="April 2014"
      location="Rice University"
    />

    <ResumeSubsection
      title="Bachelor of Science in Mathematics"
      date="May 2011"
      location="University of Texas Pan-American"
    >
      Double major in Mathematics and Computer Science
    </ResumeSubsection>
  </ResumeSection>
);

export default Education;
