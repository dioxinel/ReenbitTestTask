import React from 'react';
import { ChatsList } from './ChatsList';
import s from '../LeftBar.module.scss';

export function Chats() {
  return (
    <div>
      <div className={s.chats}>Chats</div>
      <ChatsList />
    </div>
  );
}
