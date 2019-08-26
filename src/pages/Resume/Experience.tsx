import React from 'react';
import Typography from '@material-ui/core/Typography';

import {
  Bold,
  InlineLink,
} from '../../common';
import BulletList from './BulletList';
import ResumeSection from './ResumeSection';
import ResumeSubsection from './ResumeSubsection';


const Experience = () => (
  <ResumeSection title="Experience">
    <ResumeSubsection
      title="Software Engineer"
      start="August 2015"
      end="Present"
      location="Two Sigma"
    >
      ???
    </ResumeSubsection>

    <ResumeSubsection
      title="Contractor"
      start="December 2016"
      end="Present"
      location="Lawrence Livermore National Laboratory"
    >
      <BulletList>
        <React.Fragment>
          Core developer of <InlineLink href="https://libocca.org">OCCA</InlineLink>
        </React.Fragment>
        <React.Fragment>
          Implemented an OCCA-backed solution in <InlineLink href="http://mfem.org">MFEM</InlineLink>, providing a <Bold>GPU</Bold> solution
        </React.Fragment>
        <React.Fragment>
          Developed <Bold>GPU</Bold>-enabled methods for high-order finite element implementations
        </React.Fragment>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Intern"
      date="Summer 2014"
      location="Shell"
    >
      <Typography variant="body1">
        Optimized finite difference codes on <Bold>CPU</Bold> and <Bold>GPU</Bold> architectures.
        Additionally, investigated hybrid kernels that would achieve portable performance across varying architectures.
      </Typography>
    </ResumeSubsection>

    <ResumeSubsection
      title="Contractor"
      start="Spring 2014"
      end="Fall 2014"
      location="Shell"
    >
      <Typography variant="body1">
        Implemented numerical methods for parallel architectures through <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>.
      </Typography>
    </ResumeSubsection>

    <ResumeSubsection
      title="Intern"
      date="Summer 2013"
      location="Shell"
    >
      <Typography variant="body1">
        Worked on Discontinuous Galerkin implementations for wave equations.
        Begin work on a portability layer to enable <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>.
      </Typography>
    </ResumeSubsection>
  </ResumeSection>
);

export default Experience;
