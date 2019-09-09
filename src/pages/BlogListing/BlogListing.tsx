import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PostTimeline from './PostTimeline';
import TagMetadata from './TagMetadata';
import DateMetadata from './DateMetadata';


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
  postListing: {
    flex: 1,
  },
  rightSidebar: {
    width: 200,
    paddingLeft: 25,
    marginLeft: 25,
  },
  metadataSection: {
    '&:not(:first-child)': {
      marginTop: 40,
    },
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
      <div className={classes.content}>
        <div className={classes.postListing}>
          <PostTimeline />
        </div>
        <div className={classes.rightSidebar}>
          <div className={classes.metadataSection}>
            <TagMetadata />
          </div>
          <div className={classes.metadataSection}>
            <DateMetadata />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
