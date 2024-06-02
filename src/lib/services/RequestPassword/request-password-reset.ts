import api from '../../client/client.ts'

export async function requestPasswordReset(email: string) {
  return (await api.post(`/usuarios/request-password-reset?email=${email}`)).data
}
