import api from '../../../client/client'
import { StoreResult } from '../../../types'

export async function getStoreByCEP(
  CEP: string,
  token?: string
): Promise<StoreResult> {
  return (await api.get('/api/lojas/porCEP', {
    params: CEP,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
