import api from '../../client/client.ts'

export default async function getFaturaDiaria(token: string | null) {
  return (await api.get('/api/relatorios/fatura-diaria', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
