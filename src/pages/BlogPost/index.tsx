import React from 'react';

import NotFoundPage from '../../pages/NotFoundPage';
import { postsBySlug } from '../../posts';


interface Props {
  match: {
    params: {
      postSlug: string,
    },
  },
}

const BlogPost = ({
  match: {
    params: { postSlug },
  },
}: Props) => {
  const post = postsBySlug[postSlug];
  const Component = (
    post
      ? post.component
      : NotFoundPage
  );
  return <Component />;
};

export default BlogPost;
