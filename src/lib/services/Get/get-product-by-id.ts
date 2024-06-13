import api from '../../client/client.ts'
import { ProdutoResult } from '../../types/ProdutoResult.ts'

export default async function getProductById(id: number, token: string | null): Promise<ProdutoResult> {
  return (await api.get(`/estoque/buscarProdutoPorId/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
