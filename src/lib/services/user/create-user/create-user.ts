import api from '../../../client/client'
import { CreateUserCommand } from '../../../types'

export async function createUser(
  data: CreateUserCommand
) {
  return (await api.post('/api/usuarios/cadastro', data)).data
}
