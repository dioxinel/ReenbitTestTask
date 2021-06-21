import React from 'react';
import { useStore } from '../../../stores/createStore';
import { AvatarWithTick } from '../../AvatarWithTick';
import { ChatLastMessage } from './ChatLastMessage';
import { ChatLastMessageDate } from './ChatLastMessageDate';
import s from '../LeftBar.module.scss'

export function ChatsListItem({item}) {
  const store = useStore()
  function handleClick() {
    store.chats.activateChat(item)
  }

  return (
    <li className={s.ChatsListItem} onClick={handleClick}>
      <AvatarWithTick avatarLink={item.user.avatar} />
      <ChatLastMessage item={item} /> 
      <ChatLastMessageDate 
        className={s.date} 
        time={item.messages[item.messages.length - 1].createdAt} />
    </li>)
}