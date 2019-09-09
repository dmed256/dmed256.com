import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: 'default',
    padding: '0.5em 1em',
    borderRadius: '0.2em',
    backgroundColor: theme.palette.grey[300],
    textTransform: 'uppercase',
  },
}));

interface Props {
  label: string,
}

const Tag = ({
  label,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {label}
    </div>
  );
};

export default Tag;
