import RootErrorBoundary from './core/errors'
import GlobalProviders from './core/provider'
import Router from './routes'

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
