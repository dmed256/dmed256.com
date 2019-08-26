import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import constants from '../../common/constants';


const useStyles = makeStyles({
  root: {
    paddingLeft: 18,
    [constants.media.print]: {
      margin: 0,
    },
  },
});

interface Props {
  children: React.ReactNode,
}

const BulletList = ({
  children,
}: Props) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
    {
      React.Children.map(children, (child, index) => (
        <li key={index}>
          <Typography variant="body1">
            {child}
          </Typography>
        </li>
      ))
    }
  </ul>
  );
};

export default BulletList;
