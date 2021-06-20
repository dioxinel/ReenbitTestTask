import React from 'react';
import { useStore } from '../../stores/createStore';
import { Avatar } from '../Avatar';
import Icon from '../Icon';
import { getTime } from './MessageCreatedAtDate'
import s from './RightBar.module.scss';

export const NotificationListItem = ({item}) => {
  const store = useStore()

  function handleClose() {
    store.removeNotification(item.id)
  }

  function handleClick(e) {
    const node = e.target.closest('#closeButton');
    if (node) {
      return
    }

    store.activateChatById(item.chatId)
    store.clearNotifications()
  }

  return(
  <div onClick={handleClick} className={s.notificationItem}>
    <Avatar avatarLink={store.chats.items[item.chatId].user.avatar}/>
    <div 
      className={s.messageText}>
      {store.chats.items[item.chatId].user.fullName + ':' + item.text.substring(0, 60)}
    </div>
    <div className={s.timeCloseNotification}>
      <div>{getTime(new Date(item.createdAt))}</div>
      <Icon 
        name={'cross'}
        onClick={handleClose} 
        id={"closeButton"}
        width={15} />
    </div>
  </div>
    
  )
}