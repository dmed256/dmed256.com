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
      title="Member of Technical Staff"
      start="November 2022"
      end="Present"
      location="OpenAI"
    >
      <BulletList>
        <span>// TODO(dmed): Fill out soon!</span>
      </BulletList>
    </ResumeSubsection>
    <ResumeSubsection
      title="Staff Software Engineer - Full Stack"
      start="February 2022"
      end="October 2022"
      location="Brex"
    >
      <BulletList>
        <span><Bold>Tech lead</Bold> for a ~15 person team focusing with customer-facing products</span>

        <BulletList>
          <span>Worked closely with product and design to build reasonable Q2 / H2 engineering roadmaps, starting up the H1 2023 roadmap</span>
          <span>Work closely with manager to split projects and align proper resourcing for each project</span>
          <span>Leading the migration of an acquisition's product into the Brex ecosystem which has been an extremely challenging and fulfilling project</span>
        </BulletList>

        <span>Additional work/responsibilities include</span>

        <BulletList>
          <span>Member of ~5 person <Bold>Kotlin language group</Bold> with responsibilities such as being on the #kotlin on-call rotation, giving onboarding Kotlin talks, and improving the overall Kotlin ecosystem at Brex</span>
          <span>Hop on high (L2) and critical (L1) incidents to quickly find root causes and remediations</span>
          <span>Constantly look and implement ways to improve our engineering standards across Brex</span>
        </BulletList>

        <span>+ Many other random things :)</span>
      </BulletList>
    </ResumeSubsection>
    <ResumeSubsection
      title="Senior Software Engineer - Full Stack"
      start="October 2019"
      end="February 2022"
      location="Brex"
    >
      <BulletList>
        <span>Project led many end-to-end projects</span>
        <BulletList>
          <span>From the engineering side, this includes design docs describing in human-readable English with code snippets for the full end-to-end code flow: frontend &rarr; GraphQL API &rarr; protobuf/gRPC data contract &rarr; backend &rarr; Postgres tables, relationships, indices, and constraints</span>

          <span>From the project lead side, this includes breaking down work into tickets, providing time estimates, and continuously providing updates and potential target date shifts</span>

          <span>Onboarded and mentored fellow team members, specially during our hypergrowth phase where our team grew 4x</span>
        </BulletList>

        <span>Early engineer in the <Bold>Brex Cash</Bold> product</span>
        <BulletList>
          <span>I worked and maintained the engineering-side of check deposits for around a year, where I helped enable a more secure and efficient workflow for our internal operations team</span>
          <span>Focused on reducing our cost to serve which involved working with our internal operations teams, learn their workflow, and automate through new services or internal tools, such as Retool</span>
        </BulletList>

        <span>Active in Engineering-wide initiatives while still working in a product team</span>
        <BulletList>
          <span>Commonly involved in internal incidents which involves quickly finding root causes, coordination with other teams, and fast remediation plans</span>
          <span>I've been helping with our company's move from Elixir to Kotlin for product service development. This includes being one of the few Kotlin maintainers, introducing service best practices, improving company documentation, as well as library improvements</span>
          <span>Part of many internal CAB groups (Customer Advisory Board) as a product engineer to provide feedback and reviews</span>
          <span>Early adopter of many engineering advancements, such as our move to protobuf, transition to Kotlin, and improvements in our GraphQL layer</span>
        </BulletList>

        <span>+ Many other random things across my time at Brex :)</span>
      </BulletList>
    </ResumeSubsection>

    <ResumeSubsection
      title="HPC Contractor"
      start="December 2016"
      end="October 2021"
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
      title="Senior Software Engineer - Infrastructure"
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
      title="Software Engineer - Full Stack"
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
