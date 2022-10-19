import Router from '@/routes'
import RootErrorBoundary from '@features/errors'

function App() {
  return (
    <RootErrorBoundary>
      <Router />
    </RootErrorBoundary>
  )
}

export default App
