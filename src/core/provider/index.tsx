import { DOMAttributes } from 'react'
import { AxiosProvider } from '../hooks/axios'
import { QueryProvider } from '../hooks/queryClient'

export default function GlobalProviders({ children }: DOMAttributes<never>) {
  return (
    <QueryProvider>
      <AxiosProvider>{children}</AxiosProvider>
    </QueryProvider>
  )
}
