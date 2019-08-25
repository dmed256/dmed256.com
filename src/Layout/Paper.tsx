import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    maxWidth: 1100,
    width: '93%',
    padding: '75px 0',
    margin: '-75px auto 100px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 7px 15px 0 rgba(1, 1, 1, 0.25)',
    '@media(max-width: 700px)': {
      width: '100%',
      margin: 0,
      padding: '2em 0',
      boxShadow: 'none',
      overflow: 'auto',
    },
    '@media print': {
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
    padding: '0 5em',
    '@media(max-width: 700px)': {
      padding: '0 2em',
    },
    '@media print': {
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
