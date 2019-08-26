import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import About from './About';
import Education  from './Education';
import Experience  from './Experience';
import Header from './Header';
import Projects  from './Projects';
/*
import Publications  from './Publications';
*/


const useStyles = makeStyles({
  root: {
    letterSpacing: '0.05em',
  },
});

const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <About/>
      <Experience />
      <Education />
      <Projects />
      {/*
      <Publications />
      */}
    </div>
  );
}

export default Resume;
