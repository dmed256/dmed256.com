import * as redux from 'redux';

import * as types from '../types';
import cacheReducer, { initState as cacheInitState } from './cache';
import {
  createStore,
  getStore,
  getStoreState,
} from './store'


const reducer = redux.combineReducers({
  cache: cacheReducer,
});

const initState: types.redux.State = {
  cache: cacheInitState,
};

createStore(reducer, initState);

export {
  getStore,
  getStoreState,
}
