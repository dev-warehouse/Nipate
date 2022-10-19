import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LandingPage = lazy(() => import('@pages/landing'))
const SearchPage = lazy(() => import('@pages/search'))
const AdvertPage = lazy(() => import('@pages/advert'))

export default function GlobalRoutes() {
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='advert' element={<AdvertPage />} />
      </Routes>
    </div>
  )
}
