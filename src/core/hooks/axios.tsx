import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { createContext, ProviderProps, useContext, useMemo } from 'react'

const axiosInstance = Axios.create({
  headers: {
    'Content-type': 'application/json'
  }
})

const axiosContext = createContext<AxiosInstance>(axiosInstance)

export function useAxios() {
  return useContext(axiosContext)
}

export function AxiosProvider({
  children
}: Omit<ProviderProps<AxiosInstance>, 'value'>) {
  const axios: AxiosInstance = useMemo(() => {
    axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorizations: 'Hello'
      }

      return config
    })

    return axiosInstance
  }, [])

  return (
    <axiosContext.Provider value={axios}> {children} </axiosContext.Provider>
  )
}
