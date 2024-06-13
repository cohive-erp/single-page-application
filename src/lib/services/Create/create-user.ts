import api from '../../client/client.ts'
import { CreateUserCommand } from '../../types/create-user-command.ts'

export default async function createUser(data: CreateUserCommand, token: string | null) {
  return (await api.post('/usuarios', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}
