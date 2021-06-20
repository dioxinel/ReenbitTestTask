import { types } from 'mobx-state-tree';

export const MessageModel = types.model('MessageModel', {
  text: types.string,
  owner: true, // if true it's viewer message else other users
  createdAt: types.number
}).actions((store) => ({

}));
