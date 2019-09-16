import React from 'react';

import { Bold, InlineCode } from '../../common';
import * as Lang from '../../common/Lang';
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
        <Lang.Translate>
          <Lang.English>
            C++ library that enables JIT compilation for parallel architecture kernels (<Bold>CPU</Bold>, <Bold>GPU</Bold>, <Bold>FPGA</Bold>)
          </Lang.English>
          <Lang.Chinese>
            C++ library that enables JIT compilation for parallel architecture kernels (<Bold>CPU</Bold>, <Bold>GPU</Bold>, <Bold>FPGA</Bold>)
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Unified API to program heterogeneous architectures
          </Lang.English>
          <Lang.Chinese>
            Unified API to program heterogeneous architectures
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            A C parser for the <OKL /> language, introducing <InlineCode>@attributes</InlineCode> for ast-manipuation
          </Lang.English>
          <Lang.Chinese>
            A C parser for the <OKL /> language, introducing <InlineCode>@attributes</InlineCode> for ast-manipuation
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            <OKL /> was designed to expose enough parallelism to directly convert kernels into <Bold>OpenMP</Bold>, <Bold>CUDA</Bold>, <Bold>OpenCL</Bold>, or <Bold>HIP</Bold>
          </Lang.English>
          <Lang.Chinese>
            <OKL /> was designed to expose enough parallelism to directly convert kernels into <Bold>OpenMP</Bold>, <Bold>CUDA</Bold>, <Bold>OpenCL</Bold>, or <Bold>HIP</Bold>
          </Lang.Chinese>
        </Lang.Translate>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="occa.py"
      link="https://nbviewer.jupyter.org/github/libocca/occa.py/blob/master/notebooks/Tutorial.ipynb"
    >
      <Lang.Translate>
        <Lang.English>
          A Cython-based package, integrating <Bold>numpy</Bold> objects with <OCCA /> to provide JIT compiation for parallel architecture kernels (<Bold>CPU</Bold>, <Bold>GPU</Bold>, <Bold>FPGA</Bold>)
        </Lang.English>
        <Lang.Chinese>
          A Cython-based package, integrating <Bold>numpy</Bold> objects with <OCCA /> to provide JIT compiation for parallel architecture kernels (<Bold>CPU</Bold>, <Bold>GPU</Bold>, <Bold>FPGA</Bold>)
        </Lang.Chinese>
      </Lang.Translate>
    </ResumeSubsection>
  </ResumeSection>
);

export default Projects;
