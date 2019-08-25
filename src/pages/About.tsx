import React from 'react';
import Typography from '@material-ui/core/Typography';

import {
  Bold,
  ExternalLink,
} from '../common';


const About = () => (
  <React.Fragment>
    <Typography variant="h3">
      About
    </Typography>

    <Typography variant="body1">
      Howdy, my name is David Medina!
    </Typography>

    <Typography variant="body1">
      I currently work at <Bold>Two Sigma</Bold> as a Software Engineer, where I work on a large variety of projects.

      At night I work as a contractor with <Bold>Lawrence Livermore National Laboratory</Bold> through the
      <ExternalLink href="http://ceed.exascaleproject.org/">Center for Efficient Exascale Discretizations</ExternalLink>.
    </Typography>

    <Typography variant="body1">
      When not spending time with family, I'm usually coding up some project :)
    </Typography>

    <Typography variant="body1">
      Feel free to reach out if you're interested in chatting!
    </Typography>
  </React.Fragment>
);

export default About;
