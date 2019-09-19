import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PostTimeline from './PostTimeline';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    marginBottom: 50,
  },
});

const BlogListing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        className={classes.header}
        variant="h4"
      >
        Posts
      </Typography>
      <PostTimeline />
    </div>
  );
};

export default BlogListing;
