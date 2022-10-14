import { ErrorInfo, ReactNode } from 'react'

export interface ErrorState {
  hasError: boolean
  error: { error: Error; info: ErrorInfo }
}

export interface ErrorProps {
  children: ReactNode
  message: ReactNode
}
