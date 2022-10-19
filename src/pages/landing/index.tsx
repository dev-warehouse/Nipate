import { MdOutlineMyLocation } from 'react-icons/md'
import { Button } from '@components/ui/buttons'
import { Input } from '@components/ui/input'
import Services from '@pages/landing/services'
import { Link } from 'react-router-dom'
import PageFooter from '@/components/page/footer'
import styles from './index.module.scss'

function Hero() {
  return (
    <div className={styles.hero_root}>
      <p className={styles.hero_text}>
        Find the best people
        <br />
        to serve you
      </p>
      <Link to='search'>
        <Input
          placeholder='Search for Service'
          className={styles.hero_input}
          endAdornment={
            <div className={styles.hero_search_actions}>
              <div className={styles.hero_location_pin}>
                <MdOutlineMyLocation />
              </div>
              <Button className={styles.hero_search_btn}>Search</Button>
            </div>
          }
        />
      </Link>
    </div>
  )
}

export default function Default() {
  return (
    <div className={styles.page_root}>
      <Hero />
      <Services label='Popular Services' />
      <Services label='Services Near You' />
      <PageFooter />
    </div>
  )
}
