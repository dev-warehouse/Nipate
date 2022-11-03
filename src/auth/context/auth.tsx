import { createContext, useContext } from 'react'
import { UserDetails } from '@api/models/user'

interface AuthContextProps {
  userData: UserDetails
  authToken: string
  setToken: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function useAuth() {
  return useContext(AuthContext)
}
