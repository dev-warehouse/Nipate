import {
  createContext,
  ProviderProps,
  Reducer,
  useContext,
  useMemo,
  useReducer
} from 'react'
import { UserDetails } from '@api/models/user'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useLocalStorage } from 'usehooks-ts'
import axios from 'axios'
import { USER_DETAILS_URL } from '@api/urls/auth'
import useCrypto from '../../core/hooks/utils/useCrypto'

interface AuthContextProps {
  userData?: UserDetails
  authToken?: string
  setToken: (token: string, remember?: boolean) => void
  logout: () => void
}

export type AuthActions = {
  type: 'setToken'
  data: AuthContextProps['authToken']
}

export type AuthReducer = Reducer<string | undefined, AuthActions>

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

// /* eslint-disable */
export default function AuthProvider({
  children
}: Pick<ProviderProps<never>, 'children'>) {
  const { encrypt, decrypt, hash } = useCrypto('Nipate-$DJHNMMA77ahkdasYSB-Tsk')

  const queryClient = useQueryClient()
  const [pesistantToken, setPesistantToken] = useLocalStorage<string>(
    hash('nipate-token'),
    ''
  )
  const [authToken, dispatch] = useReducer<AuthReducer>(reducerAuth, '')

  const { data: userData } = useQuery<UserDetails>(
    ['user-details'],
    async () => {
      const { data: res } = await axios.get<UserDetails>(
        `${USER_DETAILS_URL}`,
        {
          headers: {
            Authorizations: authToken
          }
        }
      )
      return res
    }
  )

  useMemo(() => {
    if (pesistantToken !== '') {
      dispatch({ type: 'setToken', data: decrypt(pesistantToken) })
    }
  }, [pesistantToken])

  useMemo(() => {
    queryClient.fetchQuery(['user-details'])
  }, [authToken])

  const setToken: AuthContextProps['setToken'] = (token, remember) => {
    if (remember) {
      setPesistantToken(encrypt(token))
    } else {
      dispatch({ type: 'setToken', data: token })
    }
  }

  // Clear Everything
  const logout: AuthContextProps['logout'] = () => {
    if (pesistantToken !== '') {
      setPesistantToken('')
    } else {
      dispatch({ type: 'setToken', data: undefined })
    }
  }

  return (
    <AuthContext.Provider value={{ userData, authToken, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
