import AuthLayout from '@layout/auth'
import { Route } from 'react-router-dom'

export default function AuthRoutes() {
  return (
    <Route element={<AuthLayout />}>
      <Route path='/' />
      <Route path='register' />
    </Route>
  )
}
