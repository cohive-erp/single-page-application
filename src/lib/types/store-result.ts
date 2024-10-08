import { UserResult } from './user-result'

export type StoreResult = {
  idLoja: number
  rua: string
  bairro: string
  cidade: string
  estado: string
  numero: number
  usuario: UserResult
  cep: string
  cnpj: string
}
