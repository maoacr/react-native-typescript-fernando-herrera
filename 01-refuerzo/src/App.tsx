import React from 'react';
import { Formularios } from './components/Formularios';
// import ObjetosLiterales from './typescript/ObjetosLiterales';
// import TiposBasicos from "./typescript/TiposBasicos";
// import Funciones from './typescript/Funciones';
// import Contador from './components/Contador';
// import ContadorConHook from './components/ContadorConHook';
// import Login from './components/Login';
// import Usuarios from './components/Usuarios';

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
      {/* {<Login />} */}
      {/* <Usuarios /> */}
      <Formularios />
    </div>
  )
}

export default App;
