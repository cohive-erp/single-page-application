import api from '../../client/client.ts'
import { ProdutoResult } from '../../types/ProdutoResult.ts'

export default async function getEstoque(token: string | null): Promise<ProdutoResult[]> {
  return (await api.get('/api/estoque', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
