import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../../stores/createStore';
import { ChatsListItem } from './ChatsListItem'
import s from '../LeftBar.module.scss'

export const ChatsList = observer(() => {
  const store = useStore()

  const chatsList = store.chats.sortedItems;
  
  return (
      <ul className={s.chatsList}>
        {chatsList.map((item, index) => {
          return (
            <ChatsListItem item={item} key={index}/>
          )
        })}
      </ul>
  );
})
