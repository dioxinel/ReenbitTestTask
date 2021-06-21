import { types } from 'mobx-state-tree';

export const UserModel = types.model('UserModel', {
  id: types.identifierNumber,
  fullName: types.string,
  avatar: types.maybeNull(types.string),
})
