import api from '../../../client/client'

export async function validateToken(
  token?: string
) {
  return (await api.get(`/api/usuarios/validate-token?token=${token}`)).data
}
