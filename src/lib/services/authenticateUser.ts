import api from '../client/client.ts'
import { AuthUserCommand } from '../types/AuthUserCommand.ts'

export default async function authenticateUser(data: AuthUserCommand) {
  return (await api.post('/usuarios/login', data)).data
}
