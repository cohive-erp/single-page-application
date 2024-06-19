import api from '../../client/client.ts'
import { UpdateProductCommand } from '../../types/update-product-command.ts'

export default async function updateProduct(id: number, data: UpdateProductCommand, token: string | null) {
  return (await api.put(`/estoque/atualizar-produto/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
