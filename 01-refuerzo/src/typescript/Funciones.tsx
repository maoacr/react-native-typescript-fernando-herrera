import React from 'react'

const Funciones = () => {

  //Se define el tipo de dato que retorna una funcion, despues de el parentesis.

  //Tambien puedes definir los tipos de datos de tus argumentos
  const sumar = ( a: number, b: number):number => {
    return a + b
  }

  return (
    <>
      <h3>Funciones, retorno y argumentos</h3>
      <span>El resultado de la suma es : {sumar(4,5)}</span>
    </>
  )
}

export default Funciones;