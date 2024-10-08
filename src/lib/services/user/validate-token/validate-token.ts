import api from '../../../client/client.ts'

export async function validateToken(
  token?: string
) {
  return (await api.get(`/api/usuarios/validate-token?token=${token}`)).data
}
