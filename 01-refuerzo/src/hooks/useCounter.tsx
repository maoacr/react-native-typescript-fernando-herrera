import React, {useState} from 'react'

export const useCounter = (initial ?: number) => {
  const [valor, setvalor] = useState(0);

  const acumular = (numero: number) => {
    setvalor(valor + numero)
  }
  return {
    valor,
    acumular,
    setvalor
  }
}

