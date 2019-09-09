import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as types from '../../types';
import { posts as allPosts } from '../../posts';
import PostSummary from './PostSummary';


const useStyles = makeStyles((theme: Theme) => ({
  year: {
    margin: '30px 0',
    fontSize: 30,
  },
}));

interface PostsByYear {
  year: number,
  posts: types.PostSummary[],
}

const PostTimeline = () => {
  const classes = useStyles();

  // Aggregate posts by year
  const postsByYear: PostsByYear[] = [];
  let currentYear = 0;
  allPosts.forEach((post) => {
    const year = post.date.year();
    if (year != currentYear) {
      currentYear = year;
      postsByYear.push({
        year,
        posts: [],
      });
    }
    postsByYear[postsByYear.length - 1].posts.push(post);
  });

  return (
    <div>
      {postsByYear.map(({ year, posts }) => (
        <div key={year}>
          {posts.map((post) => (
            <PostSummary
              key={post.title}
              post={post}
            />
          ))}
          <div className={classes.year}>
            {year}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostTimeline;
