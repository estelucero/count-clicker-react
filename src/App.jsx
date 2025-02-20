import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import reactLogo from './assets/images/react-logo.png'
function App() {
  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img className='react-logo'
          src={reactLogo}
          alt='react-logo'></img>
      </div>
    </div>
  );
}

export default App
