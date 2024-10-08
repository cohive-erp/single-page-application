import api from '../../../client/client'
import { CreateLojaCommand } from '../../../types'

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
