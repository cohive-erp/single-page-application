import api from '../../client/client.ts'
import { CreateProductCommand } from '../../types/create-product-command.ts'

export default async function createProduct(data: CreateProductCommand, token: string | null) {
  return (await api.post('/estoque', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
