import * as React from 'react';
import {
  createStore as zustandCreateStore,
  useStore as zustandUseStore,
} from 'zustand';
import type { Draft } from 'immer';
import { immer } from 'zustand/middleware/immer';

type CreateStoreArgs<TState> = (_: {
  set: (
    setter: (state: Draft<TState>) => void,
    shouldReplace?: boolean | undefined
  ) => void;
  get: () => TState;
}) => TState;

export const createContextStore = <TState,>(fn: CreateStoreArgs<TState>) => {
  const StoreContext = React.createContext(null);

  const createStore = () =>
    zustandCreateStore<TState>()(immer((set, get) => fn({ set, get })));

  type TStore = ReturnType<typeof createStore>;

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = React.useRef<TStore | undefined>();
    if (!storeRef.current) {
      storeRef.current = createStore();
    }

    return (
      <StoreContext.Provider value={storeRef.current as any}>
        {children}
      </StoreContext.Provider>
    );
  };

  const useStore = <TSelectorReturn,>(
    selector: (state: TState) => TSelectorReturn
  ) => {
    const store = React.useContext(StoreContext);
    if (!store) {
      throw new Error('Missing ContextProvider');
    }
    return zustandUseStore(store, selector);
  };

  return { Provider, useStore };
};
