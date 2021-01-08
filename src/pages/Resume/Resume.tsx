import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import About from './About';
import Education  from './Education';
import Experience  from './Experience';
import Header from './Header';
import Projects  from './Projects';
import Publications  from './Publications';
import constants from '../../common/constants';
import * as Lang from '../../common/Lang';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    letterSpacing: '0.05em',
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: -52,
    transform: 'rotate(45deg)',
    width: 160,
    padding: 20,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.95)',
    backgroundColor: theme.palette.primary.main,
    [constants.media.mobile]: {
      display: 'none',
    },
    [constants.media.print]: {
      display: 'none',
    },
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <Lang.Translate>
          <Lang.English>
            Try Printing Me!
          </Lang.English>
          <Lang.Chinese>
            Try Printing Me!
          </Lang.Chinese>
        </Lang.Translate>
      </div>
      <Header />
      <About/>
      <Experience />
      <Education />
      <Projects />
      <Publications />
    </div>
  );
}

export default Resume;
