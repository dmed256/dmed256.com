import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import constants from './constants';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    marginTop: constants.headerHeight + constants.headerGap,
    backgroundColor: theme.palette.grey[100],
    zIndex: 2,
    [constants.media.mobile]: {
      marginTop: constants.mobile.headerHeight,
      backgroundColor: theme.palette.background.paper,
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
      {children}
    </div>
  );
}


export default Paper;
