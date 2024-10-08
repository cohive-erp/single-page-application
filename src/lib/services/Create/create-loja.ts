import api from '../../client/client.ts'
import { CreateLojaCommand } from '../../types/create-loja-command.ts'

export default async function createLoja(data: CreateLojaCommand, token: string | null) {
  return (await api.post('/api/lojas', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
