import api from '../../client/client.ts'
import { CreateLojaCommand } from '../../types/create-loja-command.ts'

export async function createStore(
  data: CreateLojaCommand,
  token?: string
) {
  return (await api.post('/api/lojas', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
