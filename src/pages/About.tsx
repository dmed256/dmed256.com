import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Bold, InlineLink } from '../common';
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
            👋 My name is David Medina but I usually go by <Bold>dmed</Bold>
          </Typography>

          <Typography variant="body1">
            I just started a new role at{' '}
            <InlineLink href="https://openai.com/about">
              OpenAI
            </InlineLink>
            {' '}as a Member of Technical Staff
          </Typography>

          <Typography variant="body1">
            When not spending time with family{','} I'm usually coding some fun side project
          </Typography>

          <Typography variant="body1">
            Feel free to reach out if you're interested in chatting 😁
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
