import api from '../../client/client.ts'
import { CreateProductCommand } from '../../types/create-product-command.ts'

export default async function updateProduct(data: CreateProductCommand, token: string | null) {
  return (await api.put('/estoque/entrada-estoque', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
