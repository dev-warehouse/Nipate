import { Link, Outlet } from 'react-router-dom'
import RouteErrorHandling from '@router/error'
import styles from './index.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <Link to='..'>
        <img src='/assets/logo_full.svg' alt='Logo' className='h-8' />
      </Link>
    </header>
  )
}

function PageRoot() {
  return (
    <div className={styles.root}>
      <Header />
      <RouteErrorHandling>
        <Outlet />
      </RouteErrorHandling>
    </div>
  )
}

export default PageRoot
