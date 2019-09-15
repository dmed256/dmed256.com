import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as types from '../../types';
import PostSummary from './PostSummary';


const useStyles = makeStyles((theme: Theme) => ({
  yearContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px 0',
    fontSize: 30,
  },
  yearDivider: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: theme.palette.grey[200],
    zIndex: 1,
  },
  yearLabel: {
    backgroundColor: 'white',
    padding: '0 1em',
    zIndex: 2,
  },
}));

interface Props {
  year: number,
  posts: types.PostSummary[],
}

const AnnualPostTimeline = ({
  year,
  posts,
}: Props) => {
  const classes = useStyles();
  return (
    <div>
      {posts.map((post) => (
        <PostSummary
          key={post.title}
          post={post}
        />
      ))}
      <div className={classes.yearContainer}>
        <div className={classes.yearDivider} />
        <div className={classes.yearLabel}>
          {year}
        </div>
      </div>
    </div>
  );
};

export default AnnualPostTimeline;
