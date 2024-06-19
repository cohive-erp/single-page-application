import api from '../../client/client.ts'

export default async function getFaturaMensal(token: string | null) {
  return (await api.get('/relatorios/faturas-mensais', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
