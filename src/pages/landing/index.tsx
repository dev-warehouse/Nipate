import { MdOutlineMyLocation } from 'react-icons/md'
import { Button } from '@components/buttons'
import { Input } from '@components/input'
import { PageFooter } from '@pages/app'
import styles from './index.module.scss'

function Hero() {
  return (
    <div className={styles.hero_root}>
      <p className={styles.hero_text}>
        Find the best people
        <br />
        to serve you
      </p>
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
    </div>
  )
}

export default function Default() {
  return (
    <div className={styles.page_root}>
      <Hero />
      <PageFooter className={styles.page_footer} />
    </div>
  )
}
