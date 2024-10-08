import api from '../../../client/client.ts'
import { CreateProductCommand } from '../../../types'

export async function createProduct(
  data: CreateProductCommand,
  token?: string
) {
  return (await api.post('/api/estoque', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
