import styles from './index.module.scss'

interface ServicesProps {
  url: string
  label: string
}


export default function Services({ url, label }: ServicesProps) {
  return (
    <div className={styles.services_root}>
      <p className={styles.services_label}>{label}</p>
    </div>
  )
}
