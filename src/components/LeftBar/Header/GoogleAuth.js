import React from 'react';
import s from '../LeftBar.module.scss'
import GoogleLogin from 'react-google-login';
import { useStore } from '../../../stores/createStore';


export function GoogleAuth() {
  const store = useStore()
  const responseGoogle = (response) => {
    const userData = response.profileObj;
    if (userData) {
      store.viewerStore.login(Number(userData.googleId), userData.name, userData.imageUrl)
    }
    
  }

  function handleClick() {
    store.viewerStore.logout()
  }

  if(!store.viewerStore.viewer) {
    return (
      <GoogleLogin
        clientId="897138056517-9h97f31q32lpnh9s8v5n70vdf67fk1ke.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    )
  }

  return (
    <button className={s.logoutBtn} onClick={handleClick}>Logout</button>
  )
  
}
