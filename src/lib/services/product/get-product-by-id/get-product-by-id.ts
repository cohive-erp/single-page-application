import api from '../../../client/client'
import { ProdutoResult } from '../../../types'

export async function getProductById(
  id: number,
  token?: string
): Promise<ProdutoResult> {
  return (await api.get(`/api/estoque/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
