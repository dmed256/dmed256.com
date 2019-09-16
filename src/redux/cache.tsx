import localStorage from 'store';

import * as types from '../types';
import {
  dispatchAction,
  getStoreState,
} from './store';


const STORE_CACHE_KEY = 'redux-cache-state';


//---[ Actions ]------------------------
const setLanguageCode = (languageCode: types.LanguageCode) => {
  const state = getStoreState();

  if (languageCode !== state.cache.languageCode) {
    dispatchAction({
      type: types.redux.cache.SET_LANGUAGE_CODE,
      languageCode,
    });
  };
};

const setPostView = (postView: types.PostView) => {
  const state = getStoreState();

  if (postView !== state.cache.postView) {
    dispatchAction({
      type: types.redux.cache.SET_POST_VIEW,
      postView,
    });
  };
};


//---[ Reducer ]------------------------
const initState: types.redux.cache.State = {
  // Defaults
  languageCode: 'en',
  postView: 'detailed',

  // Cached overrides
  ...(localStorage.get(STORE_CACHE_KEY) || {}),
};

const reducer = (
  state = initState,
  action: types.redux.cache.Action,
): types.redux.cache.State => {
  switch (action.type) {
  case types.redux.cache.SET_LANGUAGE_CODE:
    return {
      ...state,
      languageCode: action.languageCode,
    };
  case types.redux.cache.SET_POST_VIEW:
    return {
      ...state,
      postView: action.postView,
    };
  default:
    return state;
  }
};

// Cache state in local storage
const cachedReducer = (
  state = initState,
  action: types.redux.cache.Action,
) => {
  const newState = reducer(state, action);

  if (state !== newState) {
    localStorage.set(STORE_CACHE_KEY, newState);
  }

  return newState;
};

export default cachedReducer;

export {
  initState,
  setLanguageCode,
  setPostView,
}
