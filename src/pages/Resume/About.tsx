import React from 'react';
import Typography from '@material-ui/core/Typography';

import {
  Bold,
  InlineLink,
} from '../../common';
import ResumeSection from './ResumeSection';


const About = () => (
  <ResumeSection title="About">
    <Typography variant="body1">
      <Bold>I really enjoy programming</Bold>.

      From high performance computing applications running on thousands of hybrid architecture nodes,
      to building web apps with great user experiences.
    </Typography>

    <Typography variant="body1">
      I'm lucky to be in an interesting combination working in the finance industry at&nbsp;
      <InlineLink href="https://www.twosigma.com">
        Two Sigma
      </InlineLink>
    &nbsp;and being a contractor with an&nbsp;
  <InlineLink href="http://ceed.exascaleproject.org">
    exascale initiative
  </InlineLink>
    </Typography>

    <Typography variant="body1">
      The influx of projects seen from both domains along with personal side-projects
      require me to work with a high variety of technologies, frameworks, libraries, and languages.
    </Typography>
  </ResumeSection>
);

export default About;
