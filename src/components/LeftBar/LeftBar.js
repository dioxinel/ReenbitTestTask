import React from 'react';
import { Chats } from './Chats';
import { LeftHeader } from './LeftHeader';
import s from './LeftBar.module.scss'

export function LeftBar() {
  return (
    <div className={s.LeftBar}>
      <LeftHeader />
      <Chats />
    </div>
  );
}


