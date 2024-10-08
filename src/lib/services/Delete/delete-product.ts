import api from '../../client/client.ts'

export default async function deleteProduct(id: number, token: string | null) {
  return (await api.delete(`/api/estoque/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
