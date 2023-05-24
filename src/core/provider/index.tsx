import { DOMAttributes } from 'react'
import AuthProvider from '@auth/context/auth'
import { AxiosProvider } from '../hooks/axios'
import { QueryProvider } from '../hooks/queryClient'

export default function GlobalProviders({ children }: DOMAttributes<never>) {
  return (
    <QueryProvider>
      <AuthProvider>
        <AxiosProvider>{children}</AxiosProvider>
      </AuthProvider>
    </QueryProvider>
  )
}
