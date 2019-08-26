import React from 'react';

import { Bold, InlineCode } from '../../common';
import { OCCA, OKL } from './links';
import BulletList from './BulletList';
import ResumeSection from './ResumeSection';
import ResumeSubsection from './ResumeSubsection';


const Projects = () => (
    <ResumeSection title="Open-Source Projects">
      <ResumeSubsection
        title="OCCA"
        link="https://libocca.org"
      >
        <BulletList>
          <React.Fragment>
            C++ library that enables JIT compilation for parallel architecture kernels (<Bold>CPU</Bold>, <Bold>GPU</Bold>, <Bold>FPGA</Bold>)
          </React.Fragment>
          <React.Fragment>
            Unified API to program heterogeneous architectures
          </React.Fragment>
          <React.Fragment>
            A C parser for the <OKL /> language, introducing <InlineCode>@attributes</InlineCode> for ast-manipuation
          </React.Fragment>
          <React.Fragment>
            <OKL /> was designed to expose enough parallelism to directly convert kernels into <Bold>OpenMP</Bold>, <Bold>CUDA</Bold>, <Bold>OpenCL</Bold>, or <Bold>HIP</Bold>
          </React.Fragment>
        </BulletList>
      </ResumeSubsection>

      <ResumeSubsection
        title="occa.py"
        link="https://nbviewer.jupyter.org/github/libocca/occa.py/blob/master/notebooks/Tutorial.ipynb"
      >
        A Cython-based package, integrating <Bold>numpy</Bold> objects with <OCCA /> to provide JIT compiation for parallel architecture kernels (<Bold>CPU</Bold>, <Bold>GPU</Bold>, <Bold>FPGA</Bold>)
      </ResumeSubsection>
  </ResumeSection>
);

export default Projects;
