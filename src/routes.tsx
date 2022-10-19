import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@core/router'
import PageRoot from './layout/app'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageRoot />,
    children: routes
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
