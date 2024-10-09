import api from '../../../client/client.ts'

export async function getTransactions(
  token?: string
) {
  return (
    await api.get('/api/relatorios/relatorio-transacoes', {
      params: 'relatorioCohive.csv',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data
}
