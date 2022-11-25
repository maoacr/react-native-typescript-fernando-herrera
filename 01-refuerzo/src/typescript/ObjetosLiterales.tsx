import React from 'react'

//Generalmente se crean las intefaces pruincipales y luego se crean las anidadas
interface Persona {
  nombre: String,
    edad: number,
    direccion: Direccion
}

//Aunque esta interfaz la utilizamos arriba, la creamos aqui abajo.
interface Direccion {
  pais: String,
  casaNo: number
}

const ObjetosLiterales = () => {

  const persona = {
    nombre: 'Mario',
    edad: 29,
    direccion: {
      pais: 'Colombia',
      casaNo: 7654
    }
  }
  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code> 
    </>
  )
}

export default ObjetosLiterales;