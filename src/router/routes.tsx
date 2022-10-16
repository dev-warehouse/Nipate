import { RouteObject } from 'react-router-dom'
import PageRoot from '@pages/app'
import { lazy } from 'react'

const LandingPage = lazy(() => import('@pages/landing'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />
  }
]

export default [
  {
    path: '/',
    element: <PageRoot />,
    children: routes
  }
]
