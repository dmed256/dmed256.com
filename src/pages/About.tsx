import React from 'react';
import Typography from '@material-ui/core/Typography';

import {
  Bold,
  InlineLink,
} from '../common';


const About = () => (
  <React.Fragment>
    <Typography variant="h4">
      About
    </Typography>

    <Typography variant="body1">
      Howdy, my name is David Medina!
    </Typography>

    <Typography variant="body1">
      I currently work at <Bold>Harvest Exchange</Bold> as a Software Engineer, where I lead the Infrastructure team.

      At night I work as a contractor with <Bold>Lawrence Livermore National Laboratory</Bold> through the&nbsp;
      <InlineLink href="http://ceed.exascaleproject.org/">Center for Efficient Exascale Discretizations</InlineLink>.
    </Typography>

    <Typography variant="body1">
      When not spending time with family, I'm usually coding up some project&nbsp; :)
    </Typography>

    <Typography variant="body1">
      Feel free to reach out if you're interested in chatting!
    </Typography>
  </React.Fragment>
);

export default About;
