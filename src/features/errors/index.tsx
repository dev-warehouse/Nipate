import { Component, ErrorInfo, HTMLAttributes, ReactNode } from 'react'
import styles from './index.module.scss'

export interface ErrorState {
  error?: Error
  errorInfo?: ErrorInfo
}

export interface ErrorProps {
  children: ReactNode
  message: ReactNode
}

export default class RootErrorBoundary extends Component<
  HTMLAttributes<HTMLDivElement>,
  ErrorState
> {
  constructor(props: HTMLAttributes<HTMLDivElement>) {
    super(props)
    this.state = { error: undefined, errorInfo: undefined }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo })
  }

  render() {
    const { state, props } = this
    if (state.error) {
      return (
        <div className={styles.root}>
          <header className={styles.header}>
            <a href='/'>
              <img src='/assets/logo_full.svg' alt='Logo' className='h-8' />
            </a>
          </header>
          <main className={styles.main}>
            <div className={styles.error_container}>
              <h1 className={styles.error_message}>TODO Write Message</h1>
              <details className={styles.error_details}>
                {state.error?.message}
                <br />
                {state.errorInfo?.componentStack}
              </details>
            </div>
          </main>
        </div>
      )
    }
    return props.children
  }
}
