import React from 'react';
import ObjetosLiterales from './typescript/ObjetosLiterales';
import TiposBasicos from "./typescript/TiposBasicos";
import Funciones from './typescript/Funciones';
import Contador from './components/Contador';
import ContadorConHook from './components/ContadorConHook';
import Login from './components/Login';

const App = () => {
  return (
    <div className='mt-2'> 
      <h1>Introducción a TypeScript y React</h1>
      <hr />
      
      {/* Bases de TypeScript */}

      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* {<Contador />} */}
      {/* {<ContadorConHook/>} */}
      {<Login />}
    </div>
  )
}

export default App;
