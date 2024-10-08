import api from '../../client/client.ts'

export async function resetPassword(token: string, senha: string) {
  return (await api.get(`/api/usuarios/validate-token?token=${token}`)).data
}
