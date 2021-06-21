import { types } from 'mobx-state-tree';
import { PersistViewerStorageName } from './persist';
import { UserModel } from './UserModel';

export const ViewerStore = types
  .model('ViewerStore', {
    viewer: types.maybeNull(UserModel),
  })
  
  .actions((store) => ({
    login(id, fullName, avatar) {
      store.viewer = {id, fullName, avatar}
      window.localStorage.setItem(PersistViewerStorageName, JSON.stringify({id, fullName, avatar}))
    },

    logout() {
      store.viewer = null;
      window.localStorage.removeItem(PersistViewerStorageName)
    },
  }));

  