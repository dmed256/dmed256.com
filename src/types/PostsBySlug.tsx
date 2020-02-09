import { PostSummary } from './PostSummary';


export interface PostsBySlug {
  [slug: string]: PostSummary,
}
