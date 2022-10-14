import { Component, ErrorInfo, HTMLAttributes, ReactNode } from 'react'

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
        <div className='w-screen h-screen space-y-2 p-1'>
          <header className='px-2 py-4 flex flex-row items-center justify-between sticky top-0 backdrop-blur-md'>
            <a href='/'>
              <img src='/assets/logo_full.svg' alt='Logo' className='h-8' />
            </a>
          </header>
          <main className='w-full h-full flex flex-col items-center justify-center'>
            <section>TODO Write Message</section>
            <div>
              <details style={{ whiteSpace: 'pre-wrap' }}>
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
