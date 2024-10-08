import api from '../../client/client.ts'

export default async function getRelatorio(token: string | null) {
  return (await api.get('/api/relatorios/get-relatorio-csv?nomeArquivo=relatorioMensal.csv', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
