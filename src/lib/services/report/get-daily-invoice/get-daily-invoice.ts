import api from '../../../client/client'

export async function getDailyInvoice(
  token?: string
) {
  return (
    await api.get('/api/relatorios/fatura-diaria', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data
}
