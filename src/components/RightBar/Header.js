import React from 'react';
import { useStore } from '../../stores/createStore';
import { AvatarWithTick } from '../AvatarWithTick';
import s from './RightBar.module.scss';

export function Header() {
  const store = useStore()
  return(
    <div className={s.header}>
      <AvatarWithTick avatarLink={store.activeChat.user.avatar} />
      <div className={s.userFullName}>{store.activeChat.user.fullName}</div>
    </div>
    
  )
}
