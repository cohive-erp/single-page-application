import api from '../../client/client.ts'
import { ProdutoResult } from '../../types/ProdutoResult.ts'

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