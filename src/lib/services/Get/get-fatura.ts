import api from '../../client/client.ts'

export default async function getFaturaDiaria(token: string | null) {
  return (await api.get('/relatorios/fatura-diaria', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
