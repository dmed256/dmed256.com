import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import constants from '../common/constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: constants.width,
    maxWidth: constants.maxWidth,
    padding: `${constants.headerGap}px 0 0 0`,
    margin: `-${constants.headerGap}px auto ${constants.headerHeight}px`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 7px 15px 0 rgba(1, 1, 1, 0.25)',
    overflow: 'hidden',
    [constants.media.mobile]: {
      width: '100%',
      margin: 0,
      padding: '2em 0',
      boxShadow: 'none',
      overflow: 'auto',
    },
    [constants.media.print]: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100vw',
      margin: 0,
      padding: 0,
      boxShadow: 'none',
    },
  },
  content: {
    padding: `0 ${constants.headerGap}px`,
    [constants.media.mobile]: {
      padding: `0 20px`,
    },
    [constants.media.print]: {
      padding: 0,
    },
  },
}));

interface Props {
  children: React.ReactNode,
}

const Paper = ({
  children,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}


export default Paper;
