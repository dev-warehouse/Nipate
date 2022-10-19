import { Outlet } from 'react-router-dom'
import RouteErrorHandling from '@router/error'
import PageHeader from '@/components/page/header'
import styles from './index.module.scss'

function PageRoot() {
  return (
    <div className={styles.root}>
      <PageHeader />
      <RouteErrorHandling>
        <Outlet />
      </RouteErrorHandling>
    </div>
  )
}

export default PageRoot
