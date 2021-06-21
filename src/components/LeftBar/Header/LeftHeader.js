import React from 'react';
import { SearchChat } from './SearchChat';
import s from '../LeftBar.module.scss'
import { AvatarWithTick } from '../../AvatarWithTick';
import { GoogleAuth } from './GoogleAuth';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/createStore';



export const LeftHeader = observer(() => {
  const store = useStore()
  return (
    <div className={s.leftHeader}>
      <div className={s.auth}>
        <AvatarWithTick avatarLink={store.viewerStore.viewer ? store.viewerStore.viewer.avatar : ''} />
        <GoogleAuth />
      </div>
      <SearchChat />
    </div>
  );
})


