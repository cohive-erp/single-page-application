import api from '../../client/client.ts'

export default async function getVendas(token: string | null) {
  return (await api.get('/relatorios/valor-vendas-ultimos-sete-dias', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
