import api from '../../client/client.ts'
import { ProdutoResult } from '../../types/ProdutoResult.ts'

export default async function getMostSellerProduct(token: string | null): Promise<ProdutoResult> {
  return (await api.get('/relatorios/produto-mais-vendido', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
