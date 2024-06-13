import api from '../../client/client.ts'

export default async function getRelatorioMensal(mes: number, ano: number, token: string | null) {
  return (await api.get('/relatorios/get-relatorio-csv', {
    params: {
      nomeArquivo: 'relatorioCohive.csv',
      mes,
      ano
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
