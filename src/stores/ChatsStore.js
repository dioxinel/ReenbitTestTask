import { getRoot, types } from 'mobx-state-tree';
import { fetchRandomJoke } from '../Api';
import { generateChat } from '../GeneratorRandomData';
import { ChatModel } from './ChatModel';
import { asyncModel } from './utils';

export const ChatsStore = types
  .model('ChatsStore', {
    items: types.array(ChatModel),
    activeChat: types.maybe(types.reference(ChatModel)),
    addMessage: asyncModel(addMessage),

    searchChatKeyWords: types.maybe(types.string)
  })
  .views(store => ({
    get sortedItems() {
      if (store.searchChatKeyWords) {
        return [...store.items.filter((item) => {
          return item.user.fullName.toLowerCase().includes(store.searchChatKeyWords.toLowerCase())
        })].sort(compareTime)
      }
        return [...store.items].sort(compareTime)
    }
  }))
  .actions((store) => ({
    createChat(avatarLink) {
      const item = generateChat(store.items.length, avatarLink)
      store.items = [ ...store.items, item];
    },
    getItemsFromLocalStorage(items) {
      store.items = [...items]
    },

    setSearchChatKeyWords(value) {
      store.searchChatKeyWords = value;
    },

    activateChat(chat) {
      store.activeChat = chat
    },

    activateChatById(id) {
      store.activeChat = store.items[id]
    },

    addResponse(text, chatId) {
      const chatToResponse = store.items[chatId]
      chatToResponse.messages = [...chatToResponse.messages, {text, owner: false, createdAt: Date.now()}]
      const rootStore = getRoot(store)
      rootStore.notifications.createNotification(text, chatId, Date.now())
    },

    addOwnMessage(text) {
      store.activeChat.messages = [...store.activeChat.messages, 
          {text: text, owner: true, createdAt: Date.now() }]
      store.addMessage.run()
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

function compareTime(a, b) {
  const timeA = a.messages[a.messages.length - 1].createdAt
  const timeB = b.messages[b.messages.length - 1].createdAt
  if (timeA < timeB) return 1;
  if (timeA === timeB) return 0;
  if (timeA > timeB) return -1;
}