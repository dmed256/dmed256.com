import React from 'react';

import { Bold, InlineLink } from '../../common';
import * as Lang from '../../common/Lang';
import { OCCA } from './links';
import BulletList from './BulletList';
import ResumeSection from './ResumeSection';
import ResumeSubsection from './ResumeSubsection';


const Experience = () => (
  <ResumeSection title="Experience">
    <ResumeSubsection
      title="Senior Software Engineer"
      start="October 2019"
      location="Brex"
    >
      <BulletList>
        ???
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="HPC Contractor"
      start="December 2016"
      end="Present"
      location="Lawrence Livermore National Laboratory"
    >
      <BulletList>
        <Lang.Translate>
          <Lang.English>
            Maintainer of <OCCA />{', '}
            an open source library enabling JIT compilation for multiple architectures:&nbsp;
            <Bold>C++</Bold>{', '}
            <Bold>OpenMP</Bold>{', '}
            <Bold>CUDA</Bold>{', '}
            <Bold>HIP</Bold>{', '}
            <Bold>OpenCL</Bold>{', '}
            <Bold>Metal</Bold>
          </Lang.English>
          <Lang.Chinese>
            Maintainer of <OCCA />{', '}
            an open source library enabling JIT compilation for multiple architectures:&nbsp;
            <Bold>C++</Bold>{', '}
            <Bold>OpenMP</Bold>{', '}
            <Bold>CUDA</Bold>{', '}
            <Bold>HIP</Bold>{', '}
            <Bold>OpenCL</Bold>{', '}
            <Bold>Metal</Bold>
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Consultant on high performance computing for numerical simulation codes
          </Lang.English>
          <Lang.Chinese>
            Consultant on high performance computing for numerical simulation codes
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Implemented an <OCCA />-backed solution in <InlineLink href="http://mfem.org">MFEM</InlineLink>, providing a <Bold>GPU</Bold> solution
          </Lang.English>
          <Lang.Chinese>
            Implemented an <OCCA />-backed solution in <InlineLink href="http://mfem.org">MFEM</InlineLink>, providing a <Bold>GPU</Bold> solution
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Developed algorithms targeting <Bold>CPUs</Bold> and <Bold>GPUs</Bold> in parallel for high-order finite element methods
          </Lang.English>
          <Lang.Chinese>
            Developed algorithms targeting <Bold>CPUs</Bold> and <Bold>GPUs</Bold> in parallel for high-order finite element methods
          </Lang.Chinese>
        </Lang.Translate>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Senior Software Engineer"
      start="April 2019"
      end="September 2019"
      location="Harvest Exchange Corp"
    >
      <BulletList>
        <Lang.Translate>
          <Lang.English>
            Led the Infrastructure team and laid out best practices for software development, including formatting and linting of <Bold>Python</Bold> and <Bold>Javascript</Bold>
          </Lang.English>
          <Lang.Chinese>
            Led the Infrastructure team and laid out best practices for software development, including formatting and linting of <Bold>Python</Bold> and <Bold>Javascript</Bold>
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Migrated deployment from three static servers to <Bold>AWS</Bold>, using <Bold>Docker</Bold>, <Bold>Pulumi</Bold>, and <Bold>Hashicorp tools</Bold>
          </Lang.English>
          <Lang.Chinese>
            Migrated deployment from three static servers to <Bold>AWS</Bold>, using <Bold>Docker</Bold>, <Bold>Pulumi</Bold>, and <Bold>Hashicorp tools</Bold>
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Improved testing process by switching to xdist-pytest for faster and simpler Travis CI and local testing
          </Lang.English>
          <Lang.Chinese>
            Improved testing process by switching to xdist-pytest for faster and simpler Travis CI and local testing
          </Lang.Chinese>
        </Lang.Translate>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Software Engineer"
      start="August 2015"
      end="April 2019"
      location="Two Sigma"
    >
      <BulletList>
        <Lang.Translate>
          <Lang.English>
            Led internal <Bold>Javascript</Bold> environment modernization, including package publishing and the use of <Bold>React</Bold> and <Bold>Typescript</Bold>
          </Lang.English>
          <Lang.Chinese>
            Led internal <Bold>Javascript</Bold> environment modernization, including package publishing and the use of <Bold>React</Bold> and <Bold>Typescript</Bold>
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Led development of an interactive webapp for searching and viewing foundational data, used by over 10% of the company
          </Lang.English>
          <Lang.Chinese>
            Led development of an interactive webapp for searching and viewing foundational data, used by over 10% of the company
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Developed a real-time dashboard for creating, viewing, and editing services in Waiter, used by over 20% of engineers
          </Lang.English>
          <Lang.Chinese>
            Developed a real-time dashboard for creating, viewing, and editing services in Waiter, used by over 20% of engineers
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Used <Bold>Spark</Bold> internals to create an efficient <Bold>Python</Bold> wrapper to the Open Sourced Two Sigma Flint library
          </Lang.English>
          <Lang.Chinese>
            Used <Bold>Spark</Bold> internals to create an efficient <Bold>Python</Bold> wrapper to the Open Sourced Two Sigma Flint library
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Developed and maintained big data pipelines using <Bold>Pyspark</Bold>
          </Lang.English>
          <Lang.Chinese>
            Developed and maintained big data pipelines using <Bold>Pyspark</Bold>
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Onboarded external applications using <Bold>Docker</Bold> and <Bold>Kubernetes</Bold>
          </Lang.English>
          <Lang.Chinese>
            Onboarded external applications using <Bold>Docker</Bold> and <Bold>Kubernetes</Bold>
          </Lang.Chinese>
        </Lang.Translate>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="HPC Contractor"
      start="Spring 2014"
      end="Fall 2014"
      location="Shell"
    >
      <BulletList>
        <Lang.Translate>
          <Lang.English>
            Optimized existing finite difference codes for parallel <Bold>CPUs</Bold> and <Bold>GPUs</Bold>
          </Lang.English>
          <Lang.Chinese>
            Optimized existing finite difference codes for parallel <Bold>CPUs</Bold> and <Bold>GPUs</Bold>
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Implemented numerical methods for parallel architectures through <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>
          </Lang.English>
          <Lang.Chinese>
            Implemented numerical methods for parallel architectures through <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>
          </Lang.Chinese>
        </Lang.Translate>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Intern"
      date="Summer 2014"
      location="Shell"
    >
      <BulletList>
        <Lang.Translate>
          <Lang.English>
            Optimized existing finite difference codes for parallel <Bold>CPUs</Bold> and <Bold>GPUs</Bold>
          </Lang.English>
          <Lang.Chinese>
            Optimized existing finite difference codes for parallel <Bold>CPUs</Bold> and <Bold>GPUs</Bold>
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Investigated hybrid kernels that would achieve portable performance across varying architectures.
          </Lang.English>
          <Lang.Chinese>
            Investigated hybrid kernels that would achieve portable performance across varying architectures.
          </Lang.Chinese>
        </Lang.Translate>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Intern"
      date="Summer 2013"
      location="Shell"
    >
      <BulletList>
        <Lang.Translate>
          <Lang.English>
            Worked on Discontinuous Galerkin implementations for wave equations
          </Lang.English>
          <Lang.Chinese>
            Worked on Discontinuous Galerkin implementations for wave equations
          </Lang.Chinese>
        </Lang.Translate>
        <Lang.Translate>
          <Lang.English>
            Begin work on a portability layer to enable <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>.
          </Lang.English>
          <Lang.Chinese>
            Begin work on a portability layer to enable <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>.
          </Lang.Chinese>
        </Lang.Translate>
      </BulletList>
    </ResumeSubsection>
  </ResumeSection>
);

export default Experience;
