import Modal from '@components/shared/modal'
import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

const LandingPage = lazy(() => import('@global/pages/landing'))
const SearchPage = lazy(() => import('@global/pages/search'))
const AdvertPage = lazy(() => import('@global/pages/advert'))

export default function GlobalRoutes() {
  const location = useLocation()
  const modal = location.state && location.state.modal

  return (
    <div className='w-full h-full relative'>
      <Routes location={modal || location}>
        <Route path='/' element={<LandingPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='advert'>
          <Route path='' element={<AdvertPage />} />
          <Route path=':id' element={<AdvertPage />} />
        </Route>
      </Routes>
      {modal && (
        <Routes>
          <Route path='' element={<Modal />}>
            <Route path='search' element={<SearchPage />} />
            <Route path='advert'>
              <Route path='' element={<AdvertPage />} />
              <Route path=':id' element={<AdvertPage />} />
            </Route>
          </Route>
        </Routes>
      )}
    </div>
  )
}
