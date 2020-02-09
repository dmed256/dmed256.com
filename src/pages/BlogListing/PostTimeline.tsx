import React from 'react';
import { connect } from 'react-redux'

import * as types from '../../types';
import { posts as allPosts } from '../../posts';
import AnnualPostTimeline from './AnnualPostTimeline';
import CompactPostTimeline from './CompactPostTimeline';


interface PostsByYear {
  year: number,
  posts: types.PostSummary[],
}

interface Props {
  postView: types.PostView,
}

const PostTimeline = ({
  postView,
}: Props) => {
  // Compact view
  if (postView === 'compact') {
    return (
      <CompactPostTimeline />
    );
  }

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

export default connect((state: types.redux.State) => ({
  postView: state.cache.postView,
}))(PostTimeline);
