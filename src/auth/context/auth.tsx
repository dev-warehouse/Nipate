import { createContext, ProviderProps, Reducer, useContext } from 'react'
import { UserDetails } from '@api/models/user'
import { useQueryClient } from '@tanstack/react-query'
import { useLocalStorage } from 'usehooks-ts'

interface AuthContextProps {
  userData: UserDetails
  authToken: string
  setToken: (token: string, remember?: boolean) => void
  logout: () => void
}

export type AuthActions = {
  type: 'setToken'
  data: AuthContextProps['authToken']
}

export type AuthReducer = Reducer<string, AuthActions>

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function useAuth() {
  return useContext(AuthContext)
}

/**
 * Reducer for Auth States
 * @param prevState
 * @param action
 */
function reducerAuth(
  prevState: AuthContextProps['authToken'],
  action: AuthActions
): AuthContextProps['authToken'] {
  switch (action.type) {
    case 'setToken':
      return action.data
    default:
      return ''
  }
}

export default function AuthProvider({
  children
}: Pick<ProviderProps<never>, 'children'>) {
  const queryClient = useQueryClient()
  const [token, setPesistantToken] = useLocalStorage<string>('nipate-token', '')

  const setToken: AuthContextProps['setToken'] = (token, remember) => {}
  const logout: AuthContextProps['logout'] = () => {}

  return (
    <AuthContext.Provider value={{ setToken, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
