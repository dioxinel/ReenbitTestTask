import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStore } from '../../stores/createStore';
import { Chat } from './Chat/Chat';
import { Header } from './Header';
import { MessageInput } from './Chat/MessageInput';
import s from './RightBar.module.scss'
import { NotificationList } from './Notification/NotificationList';

export const RightBar = observer(() => {
  const store = useStore()

  useEffect(()=>{
    const rightBar = document.getElementById('RightBar');
    setTimeout(()=>{rightBar.scrollTo({top: rightBar.scrollHeight})}, 10)
  }, [store.chats.activeChat])
  
  if (!store.chats.activeChat) {
    return(
      <div className={s.RightBar} id={'RightBar'}>
        <div className={s.selectChatToStartMessaging}>
          Select a chat to start messaging
        </div>
      </div>   
      )
  }

  return(
    <>
      <div className={s.RightBar} id={'RightBar'}>
        <Header />
        <Chat />
        <MessageInput />
      </div>
      <NotificationList />
    </>
  )
})