import React from 'react';
import { LeftBar } from './components/LeftBar/LeftBar.js';
import { RightBar } from './components/RightBar/RightBar.js';
import { createStore, Provider } from './stores/createStore.js';
import Modal from 'react-modal';

const store = createStore();
store.bootstrap();
function App() {
  return (
    <main>
      <Provider value={store}>
        <LeftBar />
        <RightBar />
      </Provider>
    </main>
  );
}

Modal.setAppElement('#modalRoot')

export default App;
