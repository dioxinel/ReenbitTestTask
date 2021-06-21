import React, { useState } from 'react';
import { useStore } from '../../../stores/createStore';
import Icon from '../../Icon';
import s from '../LeftBar.module.scss'

export function SearchChat() {
  const [keywords, setKeywords] = useState('');
  const store = useStore()

  function handleChange(e) {
    store.chats.setSearchChatKeyWords(e.target.value)
    setKeywords(e.target.value)
  }
  return (
    <div className={s.keywordsField}>
      <Icon name="search" />
      <input
        placeholder="Search or start new chat"
        value={keywords}
        onChange={handleChange}></input>
    </div>
  );
}
