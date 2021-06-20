import { types } from 'mobx-state-tree';
import { fetchRandomAvatarList, fetchRandomJoke } from '../Api';
import { ChatModel } from './ChatModel';
import { ChatsStore } from './ChatsStore';
import { NotificationModel } from './NotificationModel';
import { createPersist } from './persist';
import { asyncModel } from './utils';

export const RootStore = types
  .model('RootStore', {
    chats: types.optional(ChatsStore, {}),
    activeChat: types.maybe(types.reference(ChatModel)),
    notifications: types.optional(types.array(NotificationModel), []),

    addMessage: asyncModel(addMessage),
    getRandomAvatar: asyncModel(getRandomAvatar),
  })
  .actions((store) => ({
    async bootstrap() {
      const snapshot = createPersist(store)
      if(!localStorage.getItem('___persist')) {
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
    activateChat(chat) {
      store.activeChat = chat
    },

    activateChatById(id) {
      store.activeChat = store.chats.items[id]
    },

    addResponse(text, chatId) {
      const chatToResponse = store.chats.items[chatId]
      chatToResponse.messages = [...chatToResponse.messages, {text, owner: false, createdAt: Date.now()}]
      store.createNotification(text, chatId, Date.now())
    },

    addOwnMessage(text) {
      store.activeChat.messages = [...store.activeChat.messages, 
          {text: text, owner: true, createdAt: Date.now() }]
      store.addMessage.run()
    },

    createNotification(text, chatId, createdAt) {
      store.notifications = [{text, chatId, createdAt, 
        id: store.notifications.length ? store.notifications[0].id + 1 : 0}, ...store.notifications]
    },

    clearNotifications() {
      store.notifications = [];
    },

    removeNotification(id) {
      store.notifications = [...store.notifications.filter((item) => {
        return item.id !== id
      })]
    },
    
  }));

function addMessage() {
  return (
    async function addMessageFlow(flow, store, root) {
      const chatId = store.activeChat.id
      const res = await fetchRandomJoke()
      
      setTimeout(() => {
        store.addResponse(res.data.value, chatId)
      }, 13000)
    }
  )
}

function getRandomAvatar() {
  return (
    async function getRandomAvatarFlow(flow, store, root) {
      const avatarList = await fetchRandomAvatarList()
      return avatarList
    }
  )
}
 