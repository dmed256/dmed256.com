import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    marginTop: 175,
    backgroundColor: theme.palette.grey[100],
    zIndex: 2,
    '@media(max-width: 700px)': {
      marginTop: 65,
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
