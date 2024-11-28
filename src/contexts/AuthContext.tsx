import { createContext } from 'react'
import { AuthUserResult } from '../lib/types'

export const AuthContext = createContext<AuthUserResult>({
  userId: 0,
  nome: '',
  email: '',
  token: '',
	updateAuthData: function (): void {
		throw new Error('Function not implemented.')
	}
})
