import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../../stores/createStore';
import Modal from 'react-modal';
import s from '../RightBar.module.scss'
import { NotificationListItem } from './NotificationListItem';

export const NotificationList = observer(() => {
  const store = useStore()

  function closeModal() {
    store.notifications.clearNotifications()
  }
  return(
      <Modal 
        isOpen={!!store.notifications.items.length} 
        className={s.modal}
        overlayClassName={s.overlay}
        >
        <div className={s.notificationList}>
        {store.notifications.items.map((item) => {
          return (<NotificationListItem item={item} key={item.id}/>)
        })}
        <button onClick={closeModal} className={s.hideAllButton}>Hide all</button>
      </div>    
      </Modal>
  )
})