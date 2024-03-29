import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import HeaderLink from './HeaderLink';
import LanguageButton from './LanguageButton';
import constants from '../common/constants';
import * as Lang from '../common/Lang';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: constants.headerHeight + constants.headerGap,
    zIndex: 1,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: theme.palette.primary.light,
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
    [constants.media.mobile]: {
      fontSize: '1.3em',
      width: '4.5em',
    },
  },
  spacing: {
    flex: 1,
  },
  divider: {
    margin: '0 1em',
    width: 1,
    height: '1.3em',
    backgroundColor: 'white',
    opacity: 0.4,
    [constants.media.mobile]: {
      display: 'none',
    },
  },
  iconButton: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
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
        {/*
        <HeaderLink
          label={(
            <Lang.Translate>
              <Lang.English>Blog</Lang.English>
              <Lang.Chinese>网志</Lang.Chinese>
            </Lang.Translate>
          )}
          href="/"
        />
        */}
        <HeaderLink
          label={(
            <Lang.Translate>
              <Lang.English>About</Lang.English>
              <Lang.Chinese>关于我</Lang.Chinese>
            </Lang.Translate>
          )}
          href="/"
        />
        <HeaderLink
          label={(
            <Lang.Translate>
              <Lang.English>Resume</Lang.English>
              <Lang.Chinese>简历</Lang.Chinese>
            </Lang.Translate>
          )}
          href="/resume"
        />
        {/*
        <div className={classes.divider} />
        <LanguageButton
          classes={{ root: classes.iconButton }}
        />
        */}
      </div>
    </div>
  );
};

export default Header;
