import { types } from 'mobx-state-tree';
import { fetchRandomAvatarList } from '../Api';
import { ChatsStore } from './ChatsStore';
import { NotificationStore } from './NotificationStore';
import { createPersist, PersistStorageName } from './persist';
import { asyncModel } from './utils';
import { ViewerStore } from './ViewerStore';

export const RootStore = types
  .model('RootStore', {
    chats: types.optional(ChatsStore, {}),
    notifications: types.optional(NotificationStore, {}),
    viewerStore: types.optional(ViewerStore, {}),
    
    getRandomAvatar: asyncModel(getRandomAvatar),
  })
  .actions((store) => ({
    async bootstrap() {
      const snapshot = createPersist(store)
      if(!localStorage.getItem(PersistStorageName)) {
        const avatarList = await store.getRandomAvatar.run()
        for(let i = 0; i < 20; i++) {
          const avatarLink = avatarList.data[i].download_url
          .substring(0, avatarList.data[i].download_url.length-9) + '500/500'
          store.chats.createChat(avatarLink)
        }
       return 
      }
      snapshot.rehydrate();
    },
    
  }));

function getRandomAvatar() {
  return (
    async function getRandomAvatarFlow(flow, store, root) {
      const avatarList = await fetchRandomAvatarList()
      return avatarList
    }
  )
}
 