import { Component, ErrorInfo, HTMLAttributes, ReactNode } from 'react'

export interface ErrorState {
  hasError: boolean
  error: { error: Error; info: ErrorInfo }
}

export interface ErrorProps {
  children: ReactNode
  message: ReactNode
}

export class RootErrorBoundary extends Component<
  HTMLAttributes<HTMLDivElement>,
  ErrorState
> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error: { error, info: errorInfo } })
  }

  render() {
    const { state, props } = this
    if (state.hasError) {
      return (
        <div className='w-screen h-screen space-y-2 p-1'>
          <header className='px-2 py-4 flex flex-row items-center justify-between sticky top-0 backdrop-blur-md'>
            <a href='/'>
              <img src='/assets/logo_full.svg' alt='Logo' className='h-8' />
            </a>
          </header>
          <main>
            <section>TODO Write Message</section>
            <div>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {state.error.error.message}
                <br />
                {state.error.info.componentStack}
              </details>
            </div>
          </main>
        </div>
      )
    }
    return props.children
  }
}
