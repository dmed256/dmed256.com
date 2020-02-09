import DevelopmentEnvironmentBash from '../pages/posts/DevelopmentEnvironmentBash';

import * as types from '../types';


const postSorter = (a: types.PostSummary, b: types.PostSummary): number => {
  const aDate = a.date;
  const bDate = b.date;
  if (aDate < bDate) {
    return 1;
  }
  if (aDate > bDate) {
    return -1;
  }
  return 0;
};

const posts: types.PostSummary[] = [
  DevelopmentEnvironmentBash,
].sort(postSorter);

export default posts;
