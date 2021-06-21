import { types } from 'mobx-state-tree';
import { NotificationModel } from './NotificationModel';

export const NotificationStore = types
  .model('NotificationStore', {
    items: types.optional(types.array(NotificationModel), []),
  })
  .actions((store) => ({
    createNotification(text, chatId, createdAt) {
      store.items = [{text, chatId, createdAt, 
        id: store.items.length ? store.items[0].id + 1 : 0}, ...store.items]
    },

    clearNotifications() {
      store.items = [];
    },

    removeNotification(id) {
      store.items = [...store.items.filter((item) => {
        return item.id !== id
      })]
    },
  }));
