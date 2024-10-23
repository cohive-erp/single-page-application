import api from '../../../client/client'
import { AuthUserCommand, AuthUserResult } from '../../../types'

export async function authenticateUser(
  data: AuthUserCommand
): Promise<AuthUserResult> {
  return (await api.post('/api/usuarios/login', data)).data
}
