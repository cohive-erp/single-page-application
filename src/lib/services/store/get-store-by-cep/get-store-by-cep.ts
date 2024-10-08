import api from '../../../client/client.ts'

export async function getStoreByCEP(
  CEP: string,
  token?: string
): Promise<any> {
  return (await api.get('/api/lojas/porCEP', {
    params: CEP,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
