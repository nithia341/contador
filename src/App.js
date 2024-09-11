
import './App.css';
import Boton from './componentes/boton'; 
import Contador from "./componentes/contador";
import logo from "./imagenes/5412.jpg";
import { useState } from 'react';

function App() {

  const [numClics,setNumClics ]= useState(0);

  const manejarClic=()=> {
    setNumClics( numClics +1) ;
  }
  const reiniciarContador =()=> {
    setNumClics( 0) ;
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        className='logo'
        src={logo}
        alt= "logo de free"/>
        </div>
        <div className="contenedor-contador">
          <Contador 
          numClics= { numClics } />


          <Boton
            texto="clic"
            botonClic={true}
            manejarClic={manejarClic}/>

          <Boton
            texto="reiniciar"
            botonClic={ false }
            manejarClic={reiniciarContador}/>
          

        </div>
    </div>
  );
}

export default App;
