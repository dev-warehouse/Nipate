import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const LandingPage = lazy(() => import('@pages/landing'))
const SearchPage = lazy(() => import('@pages/search'))
const AdvertPage = lazy(() => import('@pages/advert'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: 'search',
    element: <SearchPage />
  },
  {
    path: 'advert',
    element: <AdvertPage />
  }
]
