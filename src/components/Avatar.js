import React from 'react';
import s from './Components.module.scss'

export function Avatar({avatarLink, ...props}) {

  const link = 'https://school.cabar.asia/wp-content/themes/schlcbr/assets/img/noavatar.jpg';
  
    return (
        <img
          src={avatarLink ? avatarLink : link}
          alt="Exist"
          className={s.avatar}
          {...props}
        />
    ); 
}