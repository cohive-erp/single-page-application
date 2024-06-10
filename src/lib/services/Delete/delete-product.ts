import api from '../../client/client'

export default async function deleteProduct(id: number) {
  return (await api.delete(`/produtos/${id}`)).data
}
