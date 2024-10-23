import api from '../../../client/client'

export async function getSalesLastWeek(
  token?: string
) {
  return (
    await api.get('/api/relatorios/valor-vendas-ultimos-sete-dias', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data
}
