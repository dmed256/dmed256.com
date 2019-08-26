import React from 'react';

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
      title="Senior Software Engineer"
      start="April 2019"
      end="Present"
      location="Harvest Exchange Corp"
    >
      <BulletList>
        <React.Fragment>
          Led the <Bold>Infrastructure team</Bold> and laid out best practices for software development, including formatting and linting of <Bold>Python</Bold> and <Bold>Javascript</Bold>
        </React.Fragment>
        <React.Fragment>
          Migrated deployment from three static servers to <Bold>AWS</Bold>, using <Bold>Docker</Bold>, <Bold>Pulumi</Bold>, and <Bold>Hashicorp tools</Bold>
        </React.Fragment>
        <React.Fragment>
          Improved testing process by switching to <Bold>xdist-pytest</Bold> for faster and simpler Travis CI and local testing
        </React.Fragment>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="HPC Contractor"
      start="December 2016"
      end="Present"
      location="Lawrence Livermore National Laboratory"
    >
      <BulletList>
        <React.Fragment>
          Maintainer of <InlineLink href="https://libocca.org">OCCA</InlineLink>{', '}
          an open source library enabling JIT compilation for multiple architectures:&nbsp;
          <Bold>C++</Bold>{', '}
          <Bold>OpenMP</Bold>{', '}
          <Bold>CUDA</Bold>{', '}
          <Bold>HIP</Bold>{', '}
          <Bold>OpenCL</Bold>{', '}
          <Bold>Metal</Bold>
        </React.Fragment>
        <React.Fragment>
          Consultant on high performance computing for numerical simulation codes
        </React.Fragment>
        <React.Fragment>
          Implemented an <InlineLink href="https://libocca.org">OCCA</InlineLink>-backed solution in <InlineLink href="http://mfem.org">MFEM</InlineLink>, providing a <Bold>GPU</Bold> solution
        </React.Fragment>
        <React.Fragment>
          Developed algorithms targeting <Bold>GPUs</Bold> and <Bold>CPUs</Bold> in parallel for high-order finite element methods
        </React.Fragment>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Software Engineer"
      start="August 2015"
      end="April 2019"
      location="Two Sigma"
    >
      <BulletList>
        <React.Fragment>
          Led internal <Bold>Javascript</Bold> environment modernization, including package publishing and the use of <Bold>React</Bold> and <Bold>Typescript</Bold>
        </React.Fragment>
        <React.Fragment>
          Led development of an interactive webapp for searching and viewing foundational data, used by over <Bold>10% of the company</Bold>
        </React.Fragment>
        <React.Fragment>
          Developed a real-time dashboard for creating, viewing, and editing services in Waiter, used by over <Bold>20% of engineers</Bold>
        </React.Fragment>
        <React.Fragment>
          Used <Bold>Spark</Bold> internals to create an efficient <Bold>Python</Bold> wrapper to the Open Sourced Two Sigma Flint library
        </React.Fragment>
        <React.Fragment>
          Developed and maintained big data pipelines using <Bold>Pyspark</Bold>
        </React.Fragment>
        <React.Fragment>
          Onboarded external applications using <Bold>Docker</Bold> and <Bold>Kubernetes</Bold>
        </React.Fragment>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="HPC Contractor"
      start="Spring 2014"
      end="Fall 2014"
      location="Shell"
    >
      <BulletList>
        <React.Fragment>
          Optimized existing finite difference codes for parallel <Bold>CPUs</Bold> and <Bold>GPUs</Bold>
        </React.Fragment>
        <React.Fragment>
          Implemented numerical methods for parallel architectures through <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>
        </React.Fragment>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Intern"
      date="Summer 2014"
      location="Shell"
    >
      <BulletList>
        <React.Fragment>
          Optimized existing finite difference codes for parallel <Bold>CPUs</Bold> and <Bold>GPUs</Bold>
        </React.Fragment>
        <React.Fragment>
          Investigated hybrid kernels that would achieve portable performance across varying architectures.
        </React.Fragment>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="Intern"
      date="Summer 2013"
      location="Shell"
    >
      <BulletList>
        <React.Fragment>
          Worked on Discontinuous Galerkin implementations for wave equations
        </React.Fragment>
        <React.Fragment>
          Begin work on a portability layer to enable <Bold>OpenMP</Bold>, <Bold>OpenCL</Bold>, and <Bold>CUDA</Bold>.
        </React.Fragment>
      </BulletList>
    </ResumeSubsection>
  </ResumeSection>
);

export default Experience;
