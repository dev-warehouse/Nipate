import { ReactNode } from 'react'
import styles from './index.module.scss'

export function CategoryPill({
  active,
  children
}: {
  active?: boolean
  children: ReactNode
}) {
  return (
    <div className={styles.category_pill} data-active={active}>
      <p>{children}</p>
    </div>
  )
}

CategoryPill.defaultProps = {
  active: false
}
