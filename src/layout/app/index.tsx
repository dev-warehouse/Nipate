import RouteErrorHandling from '@global/errors/router'
import PageHeader from '@components/page/header'
import { HTMLAttributes } from 'react'
import styles from './index.module.scss'

function PageRoot({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.root}>
      <PageHeader />
      <RouteErrorHandling>
        <main className={styles.main}>{children}</main>
      </RouteErrorHandling>
    </div>
  )
}

export default PageRoot
