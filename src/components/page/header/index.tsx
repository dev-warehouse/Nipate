import { Link } from 'react-router-dom'
import styles from './index.module.scss'

function PageHeader() {
  return (
    <header className={styles.header}>
      <Link to='..'>
        <img src='/assets/logo_full.svg' alt='Logo' className='h-8 md:h-9' />
      </Link>
    </header>
  )
}

export default PageHeader
