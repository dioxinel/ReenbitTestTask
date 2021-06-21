import { createContext, useContext } from 'react';
import { RootStore } from './RootStore';


export function createStore() {
  const root = RootStore.create();

  return root;
}

const MSTContext = createContext(null);

export const { Provider } = MSTContext;

export function useStore(mapStateToProps) {
  const store = useContext(MSTContext);

  if (typeof mapStateToProps === 'function') {
    return mapStateToProps(store);
  }
  return store;
}
