import { RouteObject } from 'react-router-dom'
import PageRoot from '@pages/app'
import { lazy } from 'react'

const LandingPage = lazy(() => import('@pages/landing'))
const SearchPage = lazy(() => import('@pages/search'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: 'search',
    element: <SearchPage />
  }
]

export default [
  {
    path: '/',
    element: <PageRoot />,
    children: routes
  }
]
