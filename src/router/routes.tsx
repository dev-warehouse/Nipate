import { RouteObject } from 'react-router-dom'
import PageRoot from '@pages/app'

const routes: RouteObject[] = []

export default [
  {
    path: '/',
    element: <PageRoot />,
    children: routes
  }
]
