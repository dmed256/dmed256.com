import React from 'react';

import { posts as allPosts } from '../../posts';
import CompactPostSummary from './CompactPostSummary';


const CompactPostTimeline = () => (
  <div>
    {
      allPosts.map((post) => (
        <CompactPostSummary
          key={post.slug}
          post={post}
        />
      ))
    }
  </div>
);

export default CompactPostTimeline;
