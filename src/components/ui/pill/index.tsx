import { ReactNode } from 'react'
import styles from './index.module.scss'

export default function Pill({
  active,
  children
}: {
  active?: boolean
  children: ReactNode
}) {
  return (
    <div className={styles.pill} data-active={active}>
      <p>{children}</p>
    </div>
  )
}

Pill.defaultProps = {
  active: false
}
