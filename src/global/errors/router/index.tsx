import { ErrorState } from '@/core/errors'
import {
  Component,
  DOMAttributes,
  ErrorInfo,
  HTMLAttributes,
  Suspense
} from 'react'
import { CgSpinner } from 'react-icons/cg'
import styles from './index.module.scss'

// TODO Error Customization to fit design

export function RouteLoading() {
  return (
    <div className={styles.loading_root}>
      <CgSpinner className={styles.loader} />
    </div>
  )
}

export class RouteErrorBoundary extends Component<
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
        <div className={styles.error_container}>
          <h1 className={styles.error_message}>Unable to Load Page</h1>
          <details className={styles.error_details}>
            {state.error?.message}
            <br />
            {state.errorInfo?.componentStack}
          </details>
        </div>
      )
    }
    return props.children
  }
}

function RouteErrorHandling({ children }: DOMAttributes<HTMLDivElement>) {
  return (
    <RouteErrorBoundary>
      <Suspense fallback={<RouteLoading />}>{children}</Suspense>
    </RouteErrorBoundary>
  )
}

export default RouteErrorHandling
