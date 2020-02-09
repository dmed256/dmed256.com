import React from 'react';
import { Link } from 'react-router-dom';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

import * as types from '../../types';


const styles = createStyles({
  root: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

interface Props extends WithStyles<typeof styles> {
  post: types.PostSummary,
};

const PostTitle = ({
  classes,
  post,
}: Props) => (
  <Link
    className={classes.root}
    to={`/blog/${post.slug}`}
  >
    {post.title}
  </Link>
);

export default withStyles(styles)(PostTitle);
