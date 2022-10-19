import { HTMLAttributes } from 'react'
import styles from './index.module.scss'

function PageFooter({ className = '' }: HTMLAttributes<HTMLDivElement>) {
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

export default PageFooter
