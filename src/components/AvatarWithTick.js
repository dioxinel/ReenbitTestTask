import React from 'react';
import { Avatar } from './Avatar';
import s from './Components.module.scss'
import Icon from './Icon';


export function AvatarWithTick({avatarLink}) {
  return (
    <div className={s.avatarContainer}>
        <Avatar avatarLink={avatarLink} />
        <Icon name={'tick'} className={s.tick}/>
    </div>
  );
}
