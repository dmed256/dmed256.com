import React from 'react';

import * as types from '../../types';
import { posts as allPosts } from '../../posts';
import AnnualPostTimeline from './AnnualPostTimeline';


interface PostsByYear {
  year: number,
  posts: types.PostSummary[],
}

const PostTimeline = () => {
  // Aggregate posts by year
  const postsByYear: PostsByYear[] = [];
  let currentYear = 0;
  allPosts.forEach((post) => {
    const year = post.date.year();
    if (year !== currentYear) {
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
        <AnnualPostTimeline
          key={year}
          year={year}
          posts={posts}
        />
      ))}
    </div>
  );
};

export default PostTimeline;
