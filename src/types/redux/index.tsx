import * as cache from './cache';

export interface State {
  cache: cache.State,
}

export type Action = (
  cache.Action
)

export {
  cache,
}
