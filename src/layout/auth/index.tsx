import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <Outlet />
    </div>
  )
}

export default AuthLayout
