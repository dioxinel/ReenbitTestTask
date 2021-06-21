import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../../stores/createStore';
import { Message } from './Message';
import s from '../RightBar.module.scss';

export const Chat = observer(() => {
  const store = useStore()
  const chat = store.chats.activeChat
  return(
  <div className={s.messageList}>
    <ul>
      {chat.messages.map((item, index) => {
        return (
          <Message item={item} avatar={chat.user.avatar} key={index}/>
        )
      })}
    </ul>
  </div>
  )
})
