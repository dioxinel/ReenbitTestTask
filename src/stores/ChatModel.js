import { types } from 'mobx-state-tree';
import { MessageModel } from './MessageModel';
import { UserModel } from './UserModel';

export const ChatModel = types.model('ChatModel', {
  id: types.identifierNumber,
  user: UserModel,
  messages: types.optional(types.array(MessageModel), [])
})
