import api from '../../../client/client'

export async function deleteProductById(
  id: number,
  token?: string
) {
  return (await api.delete(`/api/estoque/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
