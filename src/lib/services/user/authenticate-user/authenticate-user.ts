import api from '../../../client/client.ts'
import { AuthUserCommand } from '../../../types'

export async function authenticateUser(
  data: AuthUserCommand
) {
  return (await api.post('/api/usuarios/login', data)).data
}
