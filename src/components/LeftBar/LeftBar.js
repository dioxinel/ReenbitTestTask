import React from 'react';
import { Chats } from './Chats/Chats';
import { LeftHeader } from './Header/LeftHeader';
import s from './LeftBar.module.scss'

export function LeftBar() {
  return (
    <div className={s.LeftBar} style={{height: document.querySelector('body').clientHeight - 10 + 'px'}}>
      <LeftHeader />
      <Chats />
    </div>
  );
}


