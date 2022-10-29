import AuthLayout from '@layout/auth'
import { lazy } from 'react'
import { Route } from 'react-router-dom'

const Login = lazy(() => import('./pages/login'))
const Register = lazy(() => import('./pages/register'))

export default function AuthRoutes() {
  return (
    <Route element={<AuthLayout />}>
      <Route path='' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  )
}
