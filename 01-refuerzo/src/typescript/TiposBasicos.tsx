import React from 'react'

const TiposBasicos = () => {

  //Tipos basicos
  const nombre:string = 'Mao';
  const edad: number = 29;
  const tieneHijos: boolean = true;
  
  //Array de strings , numeros y otro tipo de elementos
  const cantantesFavoritos: string[] = ['Hector lavoe', 'Rene']
  const numerosFavoritos: number[] = [6, 22,]
  const mercado: object = {Leche: '1 Litro', Queso: '2 libras'}

  //Debemos evitar que TypeScript infiera que nuestro valor es de tipo any[]
  const cualquierCosa = [];


  return (
    <div>
      <h3>Tipos básicos</h3>
    </div>
  )
}

export default TiposBasicos
