import api from '../../client/client.ts'
import { CreateProductCommand } from '../../types/create-product-command.ts'

export default async function createProduct(data: CreateProductCommand, token: string | null) {
  return (await api.post('/api/estoque', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
