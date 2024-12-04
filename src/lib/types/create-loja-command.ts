import { UserResult } from './user-result'

export type CreateLojaCommand = {
  numero?: number | null
  cep: string
  cnpj: string
  usuario: UserResult
}
