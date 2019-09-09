import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PostSummary from './PostSummary';
import TagMetadata from './TagMetadata';
import DateMetadata from './DateMetadata';
import { posts } from '../../posts';


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
    width: 250,
    paddingLeft: 25,
    marginLeft: 25,
  },
  metadataSection: {
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
          <div>
            {posts.map((post) => (
              <PostSummary
                key={post.title}
                title={post.title}
                filename={post.filename}
                date={post.date}
                minutesToRead={post.minutesToRead}
                summary={post.summary}
                tags={post.tags}
              />
            ))}
          </div>
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
