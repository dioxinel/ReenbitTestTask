import React from 'react';
import { SearchChat } from './SearchChat';
import s from './LeftBar.module.scss'
import { AvatarWithTick } from '../AvatarWithTick';



export function LeftHeader() {
  return (
    <div className={s.leftHeader}>
      <AvatarWithTick />
      <SearchChat />
    </div>
  );
}


