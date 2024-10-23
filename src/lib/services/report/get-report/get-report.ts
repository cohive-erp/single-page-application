import api from '../../../client/client'

export async function getReport(
  token?: string
) {
  return (
    await api.get('/api/relatorios/get-relatorio-csv?nomeArquivo=relatorioMensal.csv', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data
}
