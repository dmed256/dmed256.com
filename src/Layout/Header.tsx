import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import HeaderLink from './HeaderLink';
import constants from '../common/constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: constants.headerHeight + constants.headerGap,
    zIndex: 1,
    backgroundColor: theme.palette.primary.main,
    [constants.media.mobile]: {
      height: constants.mobile.headerHeight,
    },
    [constants.media.print]: {
      display: 'none',
    },
  },
  header: {
    display: 'flex',
    height: constants.headerHeight,
    alignItems: 'center',
    width: constants.width,
    maxWidth: constants.maxWidth,
    margin: 'auto',
    letterSpacing: 2,
    '& > a, & > div': {
      color: 'white !important',
      textTransform: 'uppercase',
      textDecoration: 'none !important',
      fontWeight: '300 !important' as '300',
    },
    [constants.media.mobile]: {
      height: constants.mobile.headerHeight,
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
