import { createContext } from 'react'
import { AuthUserResult } from '../lib/types'

export const AuthContext = createContext<AuthUserResult>({
  userId: 0,
  nome: '',
  email: '',
  token: '',
  loja: {
    idLoja: 0,
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: 0,
    usuario: {
      id: 0,
      nome: '',
      numeroCelular: '',
      email: '',
      senha: ''
    },
    cep: '',
    cnpj: ''
  },
})
