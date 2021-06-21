import React from 'react';
import s from '../LeftBar.module.scss'

export function ChatLastMessage({item}) {
  return (
      <div className={s.textInfo}>
        <div className={s.userFullName}>{item.user.fullName}</div>
        <div className={s.message}>
          {item.messages[item.messages.length - 1].text.substring(0, 60)}
        </div>
      </div>  
      )
}