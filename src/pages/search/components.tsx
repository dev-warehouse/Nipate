import { DOMAttributes } from 'react'
import styles from './index.module.scss'

export function FilterItem({
  label,
  children
}: { label: string } & DOMAttributes<HTMLDivElement>) {
  return (
    <div className={styles.filter_item_container}>
      <p className={styles.filter_item_label}>{label}</p>
      {children}
    </div>
  )
}
