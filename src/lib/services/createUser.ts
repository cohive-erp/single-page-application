import api from '../client/client.ts'
import { CreateUserCommand } from '../types/CreateUserCommand.ts'

export default async function createUser(data: CreateUserCommand) {
  return (await api.post('/usuarios', data)).data
}
