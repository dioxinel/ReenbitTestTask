import { types } from 'mobx-state-tree';
import { generateChat } from '../GeneratorRandomData';
import { ChatModel } from './ChatModel';

export const ChatsStore = types
  .model('ChatsStore', {
    items: types.array(ChatModel),

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
    }
  }));

function compareTime(a, b) {
  const timeA = a.messages[a.messages.length - 1].createdAt
  const timeB = b.messages[b.messages.length - 1].createdAt
  if (timeA < timeB) return 1;
  if (timeA === timeB) return 0;
  if (timeA > timeB) return -1;
}