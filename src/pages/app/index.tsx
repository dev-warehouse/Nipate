import { Link, Outlet } from 'react-router-dom'
import RouteErrorHandling from '@router/error'
import { HTMLAttributes } from 'react'
import styles from './index.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <Link to='..'>
        <img src='/assets/logo_full.svg' alt='Logo' className='h-8 md:h-9' />
      </Link>
    </header>
  )
}

export function PageFooter({ className = '' }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[className, styles.footer].join(' ')}>
      <p>Copyright ©️ 2022 Bespoke Systems</p>
      <div />
      <p>Trademark Policy</p>
      <div />
      <p>Terms of Service</p>
    </div>
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
