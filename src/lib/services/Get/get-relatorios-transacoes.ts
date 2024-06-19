import api from '../../client/client.ts'

export default async function getRelatorioTransacoes(token: string | null) {
  return (await api.get('/relatorios/relatorio-transacoes', {
    params: 'relatorioCohive.csv',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
