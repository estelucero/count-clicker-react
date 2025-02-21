import { useState } from 'react'
import './App.css'
import reactLogo from './assets/images/react-logo.png'
import Boton from './components/Boton'
import Contador from './components/Contador'
function App() {

  const [nroClicks, setNroClicks] = useState(0);

  const aumentarClick = () => {
    setNroClicks(nroClicks + 1);
  }
  const reiniciarContador = () => {
    setNroClicks(0)
  }
  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img className='react-logo'
          src={reactLogo}
          alt='react-logo'></img>
      </div>
      <div className='contenedor-principal'>
        <Contador
          nroClicks={nroClicks}
        />
        <Boton
          texto="Aumentar"
          esBotonClick={true}
          manejarClick={aumentarClick} />
        <Boton
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}


export default App
