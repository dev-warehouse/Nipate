import Router from '@router/router'
import RootErrorBoundary from '@features/errors'

function App() {
  return (
    <RootErrorBoundary>
      <Router />
    </RootErrorBoundary>
  )
}

export default App
