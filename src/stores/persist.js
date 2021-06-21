import { onSnapshot } from "mobx-state-tree";

export const PersistStorageName = '___TestTaskPersist'

export const PersistViewerStorageName = '___Viewer'

export function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    window.localStorage.setItem(
      PersistStorageName,
      JSON.stringify(snapshot.chats),
    );
  });
  function rehydrate() {
    const snapshot = window.localStorage.getItem(PersistStorageName);
    if (snapshot) {
      store.chats.getItemsFromLocalStorage(JSON.parse(snapshot).items)
    }
    const viewer = window.localStorage.getItem(PersistViewerStorageName);
    if (viewer) {
      const viewerInfo = JSON.parse(viewer);
      store.viewerStore.login(viewerInfo.id, viewerInfo.fullName, viewerInfo.avatar)
    }
  }
  return {
    rehydrate,
  };
}