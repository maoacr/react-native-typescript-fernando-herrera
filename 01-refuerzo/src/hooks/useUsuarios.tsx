import React, {useState, useRef, useEffect} from 'react'
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';


export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);


  useEffect(() => {
    //Llamado al API
    return () => {cargarUsuarios()}
  }, [])

  const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
    return(
      <tr key={id.toString()}>
        <td>
          <img 
            src={avatar}
            alt={first_name}
            style={{width: '35px', borderRadius: 100}}
          />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  const cargarUsuarios = async() => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })

    if (resp.data.data.length > 0){
      setUsuarios( resp.data.data )
    } else {
      paginaRef.current --;
      alert('No hay mas registros')
    }
  }

  const paginaAnterior = () => {
    if ( paginaRef.current > 1 ) {
      paginaRef.current --;
      cargarUsuarios()
    }else {
      alert('Esta es la primera pagina de resultados')
    }
  }


  const paginaSiguiente = () => {
    paginaRef.current ++;
    cargarUsuarios();
  }



  return{
    usuarios,
    paginaAnterior,
    paginaSiguiente,
    renderItem
  }
}
