import React from 'react';
import { useStore } from '../../stores/createStore';
import Icon from '../Icon';
import s from './LeftBar.module.scss'

export function SearchChat() {
  const store = useStore()

  function handleChange(e) {
    store.chats.setSearchChatKeyWords(e.target.value)
  }
  return (
    <div className={s.keywordsField}>
      <Icon name="search" />
      <input
        placeholder="Search or start new chat"
        value={store.chats.searchChatKeyWords}
        onChange={handleChange}></input>
    </div>
  );
}
