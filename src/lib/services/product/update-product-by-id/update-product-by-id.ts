import api from '../../../client/client.ts'
import { UpdateProductCommand } from '../../../types'

export async function updateProductById(
  id: number,
  data: UpdateProductCommand,
  token?: string
) {
  return (await api.put(`/api/estoque/atualizar-produto/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
