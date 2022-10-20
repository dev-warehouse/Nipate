import { MapView } from '@components/ui/map'
import { Button } from '@components/ui/buttons'
import { TbMapPin } from 'react-icons/tb'
import { Pill } from '@components/shared'
import styles from './index.module.scss'

function ProviderPic() {
  return (
    <div className={styles.provider_pic_root}>
      <img
        className={styles.provider_pic_img}
        src='https://avatars.dicebear.com/api/adventurer/userId.svg'
        alt='Providers Avatar'
      />
      <p className={styles.provider_pic_name}>Rafiki cafe</p>
    </div>
  )
}

function ProviderLocation() {
  return (
    <div className={styles.provider_location_root}>
      <TbMapPin />
      <p className={styles.provider_location_name}>Kagemi, Nairobi</p>
    </div>
  )
}

function AdvertCategories() {
  return (
    <div className={styles.advert_catergories_root}>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
      <Pill active>Housing</Pill>
    </div>
  )
}

function Availability() {
  return (
    <div className={styles.provider_spec_detail_root}>
      <p className={styles.provider_spec_detail_title}>Availability</p>
      <div className={styles.availability_root}>
        <div className={styles.availability_item}>
          <p>Monday - Tuesday </p>
          <p>Monday - Tuesday </p>
        </div>
      </div>
    </div>
  )
}

function WorkingHours() {
  return (
    <div className={styles.provider_spec_detail_root}>
      <p className={styles.provider_spec_detail_title}>Working Hours</p>
      <div className={styles.working_hours_root}>
        <div className={styles.working_hours_item}>
          <p>From: </p>
          <p>7:00AM</p>
        </div>
        <div className={styles.working_hours_item}>
          <p>To: </p>
          <p>9:00PM</p>
        </div>
      </div>
    </div>
  )
}

function AdvertPage() {
  return (
    <div className={styles.page_root}>
      <div className={styles.advert_detail_root}>
        <p className={styles.advert_title}>
          Mama Samaki, Samaki nzuri ni tamu, Facilis.
        </p>
        <p className={styles.advert_description}>
          Facilis delectus rem suscipit. Cumque illum autem sit voluptatum ullam
          minus tempore. Quam ut delectus ullam omnis labore nisi omnis qui
          iusto. Optio aperiam ea consequatur. Quia sapiente sunt et consequatur
          ut et aspernatur. Excepturi et nam harum aspernatur unde porro.
          <br />
          Unde ut perferendis. Illo quo optio aut quos. Placeat optio explicabo.
          Officia beatae fuga laboriosam saepe. Non reiciendis eum.
          <br />
          Perferendis dolores cumque sed nemo dolor dolores aliquam sit. Non
          dolores doloribus explicabo totam dolor praesentium. Placeat ducimus
          in. Non non enim consequatur quam asperiores dolor sunt magnam neque.
          Eos iste corporis facilis ab eum dicta non pariatur voluptatem.
        </p>
        <div className={styles.map_container}>
          <MapView className='rounded-lg' />
        </div>
      </div>
      <div className={styles.provider_root}>
        <div className={styles.provider_prof_section_root}>
          <div className={styles.provider_profile_pic_root}>
            <ProviderPic />
            <ProviderLocation />
          </div>
          <AdvertCategories />
        </div>
        <div className={styles.provider_specs_root}>
          <Availability />
          <WorkingHours />
        </div>
        <Button className='md:!w-fit'>Request</Button>
      </div>
    </div>
  )
}

export default AdvertPage
