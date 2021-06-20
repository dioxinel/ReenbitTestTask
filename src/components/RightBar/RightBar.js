import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStore } from '../../stores/createStore';
import { Chat } from './Chat';
import { Header } from './Header';
import { MessageInput } from './MessageInput';
import Modal from 'react-modal';
import s from './RightBar.module.scss'
import { NotificationListItem } from './NotificationListItem';

export const RightBar = observer(() => {
  const store = useStore()

  useEffect(()=>{
    const rightBar = document.getElementById('RightBar');
    setTimeout(()=>{rightBar.scrollTo({top: rightBar.scrollHeight})}, 10)
  }, [store.activeChat])
  
  if (!store.activeChat) {
    return(
      <div className={s.RightBar} id={'RightBar'}>
        <div className={s.selectChatToStartMessaging}>
          Select a chat to start messaging
        </div>
      </div>
      
      )
  }

  function closeModal() {
    store.clearNotifications()
  }

  return(
    <>
      <div className={s.RightBar} id={'RightBar'}>
        <Header />
        <Chat />
        <MessageInput />
      </div>
      <Modal 
        isOpen={!!store.notifications.length} 
        className={s.modal}
        overlayClassName={s.overlay}
        >
        <div className={s.notificationList}>
        {store.notifications.map((item) => {
          return (<NotificationListItem item={item} key={item.id}/>)
        })}
        <button onClick={closeModal} className={s.hideAllButton}>Hide all</button>
      </div>    
      </Modal>
    </>
  )
})