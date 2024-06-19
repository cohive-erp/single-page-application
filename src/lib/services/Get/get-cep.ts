import api from '../../client/client.ts'

export default async function getCep(CEP: string, token: string | null): Promise<any> {
  return (await api.get('/lojas/porCEP', {
    params: CEP,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
