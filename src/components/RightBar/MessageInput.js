import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../stores/createStore';
import Icon from '../Icon';
import s from './RightBar.module.scss';

export const MessageInput = observer(() => {
  const [messageText, setMessageText] = useState('')
  const store = useStore()

  useEffect(()=>{
    const input = document.getElementById('messageInput')
    if(input) input.focus();
  }, [store.activeChat])

  useEffect(()=>{
    const rightBar = document.getElementById('RightBar');
    setTimeout(()=>{rightBar.scrollTo({top: rightBar.scrollHeight})}, 10)
  }, [store.activeChat.messages.length])

  function handleChange(e) {
    setMessageText(e.target.value)
  }

  function handleClick() {
    if(!messageText)return;
    store.addOwnMessage(messageText)
    setMessageText('');
    const rightBar = document.getElementById('RightBar');
    setTimeout(()=>{rightBar.scrollTo({top: rightBar.scrollHeight})}, 10)
  }

  return(
    <div className={s.messageInput}>
      <div className={s.messageInputContainer}>
        <input 
          value={messageText}
          id={'messageInput'}
          onChange={handleChange} 
          placeholder={'Type your message'}
          >
        </input>
        <Icon name={'send'} onClick={handleClick} className={s.sendMessageIcon}/>
      </div>
    </div>

  )
})