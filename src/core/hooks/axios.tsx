import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { createContext, ProviderProps, useContext, useMemo } from 'react'
import { useAuth } from '@auth/context/auth'

const axiosInstance = Axios.create()

const axiosContext = createContext<AxiosInstance>(axiosInstance)

export function useAxios() {
  return useContext(axiosContext)
}

export function AxiosProvider({
  children
}: Omit<ProviderProps<AxiosInstance>, 'value'>) {
  const { authToken } = useAuth()

  const axios: AxiosInstance = useMemo(() => {
    axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorizations: authToken
      }

      return config
    })

    return axiosInstance
  }, [authToken])

  return <axiosContext.Provider value={axios}>{children}</axiosContext.Provider>
}
