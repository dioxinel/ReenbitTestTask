import React from 'react';
import { useStore } from '../../../stores/createStore';
import Icon from '../../Icon';
import { getTime } from '../Chat/MessageCreatedAtDate'
import s from '../RightBar.module.scss';

export const TimeCloseNotification = ({item}) => {
  const store = useStore()

  function handleClose() {
    store.notifications.removeNotification(item.id)
  }

  return(
    <div className={s.timeCloseNotification}>
      <div>{getTime(new Date(item.createdAt))}</div>
      <Icon 
        name={'cross'}
        onClick={handleClose} 
        id={"closeButton"}
        width={15} />
    </div>
  )
}