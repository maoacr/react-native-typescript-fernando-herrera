import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const ContadorConHook = () => {

  const {valor, acumular, setvalor} = useCounter();
  
  return (
    <>
      <h3>ContadorConHook: <small>{ valor }</small></h3>

      <button 
        className='btn btn-primary'
        onClick={()=> acumular(1)}
      >+1</button>
      &nbsp;
      <button 
        className='btn btn-primary'
        onClick={()=> acumular(-1)}
      >-1</button>
      &nbsp;
      <button 
        className='btn btn-secondary'
        onClick={()=> setvalor(0)}
      >Reset</button>
    </>
  )
}

export default ContadorConHook
