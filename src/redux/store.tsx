import * as redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as types from '../types';


let store: redux.Store<types.redux.State>;

const createStore = (
  reducer: any,
  initState: Partial<types.redux.State>,
): redux.Store<types.redux.State> => {
  store = redux.createStore(
    reducer,
    initState,
    composeWithDevTools(),
  );
  return store;
};

const getStore = (): redux.Store<types.redux.State> => (
  store
);

const getStoreState = (): types.redux.State => (
  store.getState()
);

const dispatchAction = (action: types.redux.Action) => {
  store.dispatch(action);
}

export {
  createStore,
  getStore,
  getStoreState,
  dispatchAction,
}
