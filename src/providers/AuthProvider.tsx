// /* eslint-disable react-hooks/exhaustive-deps */
// import { jwtDecode } from 'jwt-decode'
// import { ReactNode, useEffect, useState } from 'react'
// import { AuthContext } from '../contexts/AuthContext'
// import { JwtDecoded } from '../lib/types/jwt-decoded'
// import { useNavigate } from 'react-router-dom'
// import useClient from '../lib/client/useClient'

// interface Props {
//   children: ReactNode
// }

// const AuthProvider = ({ children }: Props) => {
//   const client = useClient()
//   const navigate = useNavigate()

//   const getTokenDecoded = (tokenEncoded: string): JwtDecoded => {
//     return jwtDecode(tokenEncoded)
//   }

//   const [token, setToken] = useState(sessionStorage.getItem('token') ?? '')
//   const tokenDecoded = token ? getTokenDecoded(token) : {} as JwtDecoded
//   const [id, setId] = useState(tokenDecoded?.id ?? '')
//   const [username, setUsername] = useState(tokenDecoded?.username ?? '')
//   const [student, setStudent] = useState<string | undefined>(undefined)

//   const updateAuthData = (newToken: string) => {
//     const tokenDecoded = getTokenDecoded(newToken)

//     setId(tokenDecoded.id)
//     setRole(tokenDecoded.role)
//     setToken(newToken)
//     setUsername(tokenDecoded.username)
//     sessionStorage.setItem('token', newToken)
//   }

//   const setStudentTeacher = (studentId: string) => {
//     setStudent(studentId)
//   }

//   useEffect(() => {
//     if (!token) {
//       client.refreshToken().then(response => {
//         updateAuthData(response.data.token)
//       }).catch(() => {
//         navigate('/login')
//       })
//     } else {
//       updateAuthData(token)
//     }
//   }, [token])

//   return (
//     <AuthContext.Provider value={{ id, role, username, token, updateAuthData, student, setStudentTeacher }}>
//       {token !== '' ?
//         children
//         :
//         <div></div>
//       }
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider
