import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageRoot from '@layout/app'
import GlobalRoutes from '@global/routes'
import AuthRoutes from './auth/routes'

function Router() {
  return (
    <BrowserRouter>
      <PageRoot>
        <Routes>
          <Route path='/*' element={<GlobalRoutes />} />
          <Route path='auth/*' element={<AuthRoutes />} />
        </Routes>
      </PageRoot>
    </BrowserRouter>
  )
}

export default Router
