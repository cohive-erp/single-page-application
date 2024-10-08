import api from '../client/client.ts'
import { AuthUserCommand } from '../types/AuthUserCommand.ts'

export default async function authenticateUser(data: AuthUserCommand) {
  return (await api.post('/api/usuarios/login', data)).data
}
