import { types } from 'mobx-state-tree';

export const NotificationModel = types.model('NotificationModel', {
  text: types.string,
  chatId: types.number,
  createdAt: types.number,
  id: types.identifierNumber,
})