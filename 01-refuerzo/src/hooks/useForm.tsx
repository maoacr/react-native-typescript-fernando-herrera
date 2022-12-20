import React, { useState } from 'react'

export const useForm = () => {
  const [formulario, setFormulario] = useState({
    email: 'test@test.com',
    password: '123456'
  })
  const onChange = ( value: string, campo: string) => {
    setFormulario({
      ...formulario,
      [campo]: value
    })
  }
  return {
    onChange,
    formulario
  }

}
