import { StoreResult } from './store-result'

export type AuthUserResult = {
  userId: number
  nome: string
  email: string
  token: string
  loja: StoreResult
}
