import Router from '@/routes'
import RootErrorBoundary from '@features/errors'
import GlobalProviders from '@core/provider'

function App() {
  return (
    <RootErrorBoundary>
      <GlobalProviders>
        <Router />
      </GlobalProviders>
    </RootErrorBoundary>
  )
}

export default App
