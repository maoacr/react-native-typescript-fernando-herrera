import React from 'react'
import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

const Usuarios = () => {

  const {usuarios, paginaAnterior, paginaSiguiente, renderItem} = useUsuarios();

  return (
    <>
      <h3>Usuarios: </h3> 

      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItem)
          }
        </tbody>
      </table>

      <button 
        className='btn btn-primary'
        onClick={ paginaAnterior }
      >
        Anteriores
      </button>

      &nbsp;

      <button 
        className='btn btn-primary'
        onClick={ paginaSiguiente }
      >
        Siguientes
      </button>
    </>
  )
}

export default Usuarios;