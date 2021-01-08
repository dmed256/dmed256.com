import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { InlineLink } from '../common';
import constants from '../common/constants';


const useStyles = makeStyles({
  root: {
    [constants.media.mobile]: {
      marginTop: 10,
    }
  },
  title: {
    marginBottom: 30,
    [constants.media.mobile]: {
      display: 'none',
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [constants.media.mobile]: {
      flexDirection: 'column',
    }
  },
  image: {
    minWidth: 150,
    maxWidth: 150,
    minHeight: 150,
    maxHeight: 150,
    backgroundColor: '#e4e4e4',
    borderRadius: 150,
    marginRight: 40,
    [constants.media.mobile]: {
      minWidth: 130,
      maxWidth: 130,
      minHeight: 130,
      maxHeight: 130,
      marginRight: 0,
      marginBottom: 20,
    }
  },
});


const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h4"
      >
        About
      </Typography>
      <div className={classes.container}>
        <img
          className={classes.image}
          src="/images/me.jpg"
          alt="David Medina"
        />

        <div>
          <Typography variant="body1">
            Howdy{','} my name is David Medina!
          </Typography>

          <Typography variant="body1">
            I currently work at <InlineLink href="https://brex.com">Brex</InlineLink> as a Senior Software Engineer on the Cash team building cool stuff.
          </Typography>

          <Typography variant="body1">
            At night I work as a contractor with <InlineLink href="https://www.llnl.gov">Lawrence Livermore National Laboratory</InlineLink> through the&nbsp;
            <InlineLink href="http://ceed.exascaleproject.org/">Center for Efficient Exascale Discretizations</InlineLink>.
          </Typography>

          <Typography variant="body1">
            When not spending time with family{','} I'm usually coding up some project. Feel free to reach out if you're interested in chatting!
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
