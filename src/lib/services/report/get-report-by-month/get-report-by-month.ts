import api from '../../../client/client.ts'

export async function getReportByMonth(
  month: number,
  year: number,
  token?: string
) {
  const nomeArquivo = 'relatorioCohive.csv'

  return (
    await api.get('/api/relatorios/get-relatorio-csv', {
      params: { nomeArquivo, month, year },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data
}
