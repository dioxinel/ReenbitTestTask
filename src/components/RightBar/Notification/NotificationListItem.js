import React from 'react';
import { useStore } from '../../../stores/createStore';
import { Avatar } from '../../Avatar';
import s from '../RightBar.module.scss';
import { TimeCloseNotification } from './TimeCloseNotification';

export const NotificationListItem = ({item}) => {
  const store = useStore()

  function handleClick(e) {
    const node = e.target.closest('#closeButton');
    if (node) {
      return
    }

    store.chats.activateChatById(item.chatId)
    store.notifications.clearNotifications()
  }

  return(
  <div onClick={handleClick} className={s.notificationItem}>
    <Avatar avatarLink={store.chats.items[item.chatId].user.avatar}/>
    <div 
      className={s.messageText}>
      {store.chats.items[item.chatId].user.fullName + ':' + item.text.substring(0, 60)}
    </div>
    <TimeCloseNotification item={item} />
  </div>
    
  )
}