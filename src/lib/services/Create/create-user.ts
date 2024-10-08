import api from '../../client/client.ts'
import { CreateUserCommand } from '../../types/create-user-command.ts'

export default async function createUser(data: CreateUserCommand) {
  return (await api.post('/api/usuarios/cadastro', data)).data
}
