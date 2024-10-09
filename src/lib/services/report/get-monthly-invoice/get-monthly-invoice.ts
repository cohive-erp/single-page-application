import api from '../../../client/client.ts'

export async function getMonthlyInvoice(
  token?: string
) {
  return (
    await api.get('/api/relatorios/faturas-mensais', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data
}
