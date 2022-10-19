import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageRoot from '@layout/app'
import GlobalRoutes from '@global/routes'

function Router() {
  return (
    <BrowserRouter>
      <PageRoot>
        <Routes>
          <Route path='/*' element={<GlobalRoutes />} />
        </Routes>
      </PageRoot>
    </BrowserRouter>
  )
}

export default Router
