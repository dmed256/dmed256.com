import * as types from '../types';
import posts from './posts';

// Organize posts by slug
const postsBySlug: types.PostsBySlug = (
  posts.reduce((obj, post) => ({
    ...obj,
    [post.slug]: post,
  }), {})
);

export default postsBySlug;
