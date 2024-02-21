import React from 'react';
import './index.scss';
import { useState } from 'react';

function App() {

  let [render, setRender] = useState(false)

  let onClickRender = () => setRender(!render)
  
  const Modal = (render) => (
    <div className={`overlay animated ${render ? 'show' : ''}`} >
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={onClickRender}>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
  )

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={onClickRender}>
        ✨ Открыть окно
        </button>
      { render && <Modal render={render}/>}
    </div>
  );
}

export default App;
