import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Bold, InlineLink } from '../../common';
import * as Lang from '../../common/Lang';
import ResumeSection from './ResumeSection';


const About = () => (
  <ResumeSection title="About">
    <Typography variant="body1">
      <Bold>
        <Lang.Translate>
          <Lang.English>
            I really enjoy programming!
          </Lang.English>
          <Lang.Chinese>
            I really enjoy programming!
          </Lang.Chinese>
        </Lang.Translate>
      </Bold>
    </Typography>

    <Typography variant="body1">
      <Lang.Translate>
        <Lang.English>
          From high performance computing applications running on thousands of hybrid architecture nodes,
          to building web apps with great user experiences.
        </Lang.English>
        <Lang.Chinese>
          From high performance computing applications running on thousands of hybrid architecture nodes,
          to building web apps with great user experiences.
        </Lang.Chinese>
      </Lang.Translate>
    </Typography>

    <Typography variant="body1">
      <Lang.Translate>
        <Lang.English>
          I'm lucky to have worked in various environments, including a startup
        </Lang.English>
        <Lang.Chinese>
          I'm lucky to have worked in various environments, including a startup
        </Lang.Chinese>
      </Lang.Translate>

      &nbsp;
      <InlineLink href="https://www.hvst.com">
        @Harvest
      </InlineLink>

      <Lang.Translate>
        <Lang.English>
          {','} finance industry
        </Lang.English>
        <Lang.Chinese>
          {','} finance industry
        </Lang.Chinese>
      </Lang.Translate>

      &nbsp;
      <InlineLink href="https://www.twosigma.com">
        @TwoSigma
      </InlineLink>

      <Lang.Translate>
        <Lang.English>
          {','} and an HPC contractor for
        </Lang.English>
        <Lang.Chinese>
          {','} and an HPC contractor for
        </Lang.Chinese>
      </Lang.Translate>

      &nbsp;
      <InlineLink href="http://ceed.exascaleproject.org">
        @CEED
      </InlineLink>

      <Lang.Translate>
        <Lang.English>
          {','} an exascale initiative at a government national laboratory
        </Lang.English>
        <Lang.Chinese>
          {','} an exascale initiative at a government national laboratory
        </Lang.Chinese>
      </Lang.Translate>

      &nbsp;
      <InlineLink href="https://www.llnl.gov">
        @LLNL
      </InlineLink>
    </Typography>

    <Typography variant="body1">
      <Lang.Translate>
        <Lang.English>
          The influx of projects seen from both domains along with personal side-projects
          require me to work with a high variety of technologies, frameworks, libraries, and languages.
        </Lang.English>
        <Lang.Chinese>
          The influx of projects seen from both domains along with personal side-projects
          require me to work with a high variety of technologies, frameworks, libraries, and languages.
        </Lang.Chinese>
      </Lang.Translate>
    </Typography>
  </ResumeSection>
);

export default About;
