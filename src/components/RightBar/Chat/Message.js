import React from 'react';
import { Avatar } from '../../Avatar';
import { MessageCreatedAtDate } from './MessageCreatedAtDate';
import s from '../RightBar.module.scss';

export const Message = ({item, avatar}) => {
  let className = s.ownMessage
  if(!item.owner) {
    className = s.notOwnMessage
  }

  return(
  <li className={className}>
    {!item.owner ?<Avatar avatarLink={avatar} className={s.avatar}/>: ''}
    <div className={s.messageTextInfo}>
      <div className={s.text}>{item.text}</div>
      <MessageCreatedAtDate time={item.createdAt} className={s.date}/>
    </div>
  </li>
  )
}