import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import HeaderLink from './HeaderLink';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: 175,
    zIndex: 1,
    backgroundColor: theme.palette.primary.main,
    '@media(max-width: 700px)': {
      height: 65,
    },
    '@media print': {
      display: 'none',
    },
  },
  header: {
    display: 'flex',
    height: 100,
    alignItems: 'center',
    maxWidth: 1100,
    width: '93%',
    margin: 'auto',
    letterSpacing: 2,
    '& > a, & > div': {
      color: 'white !important',
      textTransform: 'uppercase',
      textDecoration: 'none !important',
      fontWeight: '300 !important' as '300',
    },
    '@media(max-width: 700px)': {
      height: 65,
    },
  },
  name: {
    fontSize: '1.6em',
    '@media(max-width: 425px)': {
      fontSize: '1.3em',
    },
  },
  spacing: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.name}>
          David Medina
        </div>
        <div className={classes.spacing} />
        <HeaderLink
          label="Blog"
          href="/"
        />
        <HeaderLink
          label="About"
          href="/about"
        />
        <HeaderLink
          label="Resume"
          href="/resume"
        />
      </div>
    </div>
  );
};

export default Header;
