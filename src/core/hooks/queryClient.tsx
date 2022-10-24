import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps
} from '@tanstack/react-query'

export const queryClient = new QueryClient()
// {
//   defaultOptions: {
//     mutations: {
//       networkMode: BASE_URL === LOCAL_BASE_URL ? 'always' : 'online'
//     },
//     queries: {
//       networkMode: BASE_URL === LOCAL_BASE_URL ? 'always' : 'online'
//     }
//   }
// }

export function QueryProvider({
  children
}: Omit<QueryClientProviderProps, 'client'>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
