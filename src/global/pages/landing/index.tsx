import { MdOutlineMyLocation } from 'react-icons/md'
import { Button } from '@components/ui/buttons'
import { Input } from '@components/ui/input'
import { useLocation, useNavigate } from 'react-router-dom'
import PageFooter from '@components/page/footer'
import styles from './index.module.scss'

function Hero() {
  const location = useLocation()
  const navigate = useNavigate()
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
        onClick={() => navigate('search', { state: { modal: location } })}
        onChange={() => navigate('search', { state: { modal: location } })}
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

function PopularServices() {
  return (
    <div className={styles.services_root}>
      <p className={styles.services_label}>Popular Services</p>
    </div>
  )
}

function NearYou() {
  return (
    <div className={styles.services_root}>
      <p className={styles.services_label}>Services Near You</p>
    </div>
  )
}

export default function Default() {
  return (
    <div className={styles.page_root}>
      <Hero />
      <PopularServices />
      <NearYou />
      <PageFooter />
    </div>
  )
}
