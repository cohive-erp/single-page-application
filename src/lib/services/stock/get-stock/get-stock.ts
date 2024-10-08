import api from '../../../client/client.ts'
import { ProdutoResult } from '../../../types/ProdutoResult.ts'

export async function getStock(
  token?: string
): Promise<ProdutoResult[]> {
  return (await api.get('/api/estoque', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}