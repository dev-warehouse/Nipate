import { createContext, ProviderProps, useContext } from 'react'
import { UserDetails } from '@api/models/user'
import { useQueryClient } from '@tanstack/react-query'

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

export default function AuthProvider({
  children
}: Omit<ProviderProps<never>, 'value'>) {
  const queryClient = useQueryClient()
  const setToken = (token: string) => {}
  const logout = () => {}
  return (
    <AuthContext.Provider value={{ setToken, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
