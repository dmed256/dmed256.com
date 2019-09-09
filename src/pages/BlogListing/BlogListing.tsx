import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PostSummary from './PostSummary';
import TagMetadata from './TagMetadata';
import DateMetadata from './DateMetadata';
import * as types from '../../types';

const DUMMY_SUMMARY = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue purus ut turpis tristique fringilla. Phasellus sem mi, egestas non tortor et, pretium ultricies erat. Nulla elementum ipsum id metus euismod, ut ultrices urna eleifend. Aliquam condimentum arcu faucibus tellus tristique porttitor.';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    marginBottom: 30,
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

  const posts = [
    {
      title: "Title 1",
      filename: "foo.md",
      date: "09/07/2019",
      minutesToRead: 10,
      summary: DUMMY_SUMMARY,
      tags: ['Javascript', 'React', 'Redux'],
    },
    {
      title: "Title 2",
      filename: "foo.md",
      date: "09/10/2019",
      minutesToRead: 10,
      summary: DUMMY_SUMMARY,
      tags: ['Javascript', 'JSS', 'Styling'],
    },
    {
      title: "Title 3",
      filename: "foo.md",
      date: "10/10/2019",
      minutesToRead: 10,
      summary: DUMMY_SUMMARY,
      tags: ['Typescript'],
    },
    {
      title: "Title 4",
      filename: "foo.md",
      date: "09/10/2019",
      minutesToRead: 10,
      summary: DUMMY_SUMMARY,
      tags: ['C++', 'GPU'],
    },
  ].map(({ date, ...other }) => ({
    date: moment(date),
    ...other,
  }));

  const uniqueTags = new Set();
  const dateMetadata: types.DateMetadata = {
    count: 0,
  };

  posts.forEach(({ date, tags }) => {
    // Add date in hierarchy
    const year = date.year();
    const month = date.month();
    if (!(year in dateMetadata)) {
      dateMetadata[year] = {
        count: 0,
      };
    }
    const yearMetadata = dateMetadata[year] as types.YearMetadata;
    if (!(month in yearMetadata)) {
      yearMetadata[month] = 0;
    }
    ++dateMetadata.count;
    ++yearMetadata.count;
    ++yearMetadata[month];

    // Add tags
    tags.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });

  return (
    <div className={classes.root}>
      <div className={classes.postListing}>
        <Typography
          className={classes.header}
          variant="h4"
        >
          Posts
        </Typography>
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
  );
};

export default BlogListing;
