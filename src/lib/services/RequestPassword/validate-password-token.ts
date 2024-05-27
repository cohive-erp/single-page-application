import api from '../../client/client.ts'

export async function validatePasswordToken(token: string) {
  return (await api.get(`/usuarios/validate-token?token=${token}`)).data
}
