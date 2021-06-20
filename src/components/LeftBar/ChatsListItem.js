import React from 'react';
import { useStore } from '../../stores/createStore';
import { AvatarWithTick } from '../AvatarWithTick';
import { ChatLastMessageDate } from './ChatLastMessageDate';
import s from './LeftBar.module.scss'

export function ChatsListItem({item}) {
  const store = useStore()
  function handleClick() {
    store.activateChat(item)
  }

  return (
    <li className={s.ChatsListItem} onClick={handleClick}>
      <AvatarWithTick avatarLink={item.user.avatar} />
      <div className={s.textInfo}>
        <div className={s.userFullName}>{item.user.fullName}</div>
        <div className={s.message}>
          {item.messages[item.messages.length - 1].text.substring(0, 60)}
        </div>
      </div>  
      <ChatLastMessageDate 
        className={s.date} 
        time={item.messages[item.messages.length - 1].createdAt} />
    </li>)
}