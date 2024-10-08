import api from '../../../client/client.ts'
import { ProdutoResult } from '../../../types/product-result.ts'

export async function getMostSellerProduct(
  token?: string
): Promise<ProdutoResult> {
  return (
    await api.get('/api/relatorios/produto-mais-vendido', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data
}
