import { onSnapshot } from "mobx-state-tree";

export function createPersist(store) {
  onSnapshot(store, (snapshot) => {
    window.localStorage.setItem(
      '___persist',
      JSON.stringify(snapshot.chats),
    );
  });
  function rehydrate() {
    const snapshot = window.localStorage.getItem('___persist');
    if (snapshot) {
      store.chats.getItemsFromLocalStorage(JSON.parse(snapshot).items)
    }
  }
  return {
    rehydrate,
  };
}