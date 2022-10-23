import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

import constants from '../../common/constants';


const styles = createStyles({
  root: {
    paddingLeft: 18,
    margin: '0.5em 0',
    [constants.media.print]: {
      margin: 0,
    },
  },
  listItem: {},
});

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode,
}

const BulletList = ({
  classes,
  children,
}: Props) => (
  <ul className={classes.root}>
    {
      React.Children.map(children, (child, index) => (
        // Hack to detect nested bullet lists
        ((child as any)?.type?.Naked?.name === 'BulletList')
          ? child
          : (
            <li key={index}>
              <Typography variant="body1" className={classes.listItem}>
                {child}
              </Typography>
            </li>
          )
      ))
    }
  </ul>
);

export default withStyles(styles)(BulletList);
