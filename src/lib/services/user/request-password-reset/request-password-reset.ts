import api from '../../../client/client.ts'

export async function requestPasswordReset (
  email: string
) {
  return (await api.post(`/api/usuarios/request-password-reset?email=${email}`)).data
}
