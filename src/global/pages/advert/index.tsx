import { MapView } from '@components/ui/map'
import { TbMapPin } from 'react-icons/tb'
import Pill from '@components/ui/pill'
import { Button } from '@components/ui'
import { ErrorBoundary } from 'react-error-boundary'
import { DOMAttributes, Suspense } from 'react'
import { useAdvert } from '@api/hooks/advert'
import { useParams } from 'react-router-dom'
import { AdvertCardProps } from '@components/shared'
import styles from './index.module.scss'

function AdvertDetails({ advert, state }: AdvertCardProps) {
  return (
    <div className={styles.page_root}>
      <div className={styles.advert_detail_root}>
        <p className={styles.advert_title} data-state={state}>
          {advert?.title}
        </p>
        <p className={styles.advert_description} data-state={state}>
          {advert?.description}
        </p>
        <div className={styles.map_container}>
          <MapView className='rounded-lg' />
        </div>
      </div>
      <div className={styles.provider_root}>
        <div className={styles.provider_prof_section_root}>
          <div className={styles.provider_profile_pic_root}>
            <div className={styles.provider_pic_root}>
              <img
                className={styles.provider_pic_img}
                data-state={state}
                src={advert?.provider.user.avatar}
                alt='avatar'
              />
              <p className={styles.provider_pic_name} data-state={state}>
                {advert?.provider.user.displayName}
              </p>
            </div>
            <div className={styles.provider_location_root} data-state={state}>
              <TbMapPin />
              <p className={styles.provider_location_name}>
                {advert?.provider.county.name}
              </p>
            </div>
          </div>
          <div className={styles.advert_catergories_root} data-state={state}>
            <Pill active>Housing</Pill>
            <Pill active>Housing</Pill>
          </div>
        </div>
        <div className={styles.provider_specs_root}>
          <div className={styles.provider_spec_detail_root}>
            <p className={styles.provider_spec_detail_title}>Availability</p>
            <div className={styles.availability_root} data-state={state}>
              <div className={styles.availability_item}>
                <p>Monday - Tuesday </p>
                <p>Monday - Tuesday </p>
              </div>
            </div>
          </div>
          <div className={styles.provider_spec_detail_root}>
            <p className={styles.provider_spec_detail_title}>Working Hours</p>
            <div className={styles.working_hours_root}>
              <div className={styles.working_hours_item} data-state={state}>
                <p>From: </p>
                <p>7:00AM</p>
              </div>
              <div className={styles.working_hours_item} data-state={state}>
                <p>To: </p>
                <p>9:00PM</p>
              </div>
            </div>
          </div>
        </div>
        <Button className='md:!w-fit'>Request</Button>
      </div>
    </div>
  )
}

function AdvertDetailsPage() {
  const { id } = useParams()
  const { data } = useAdvert(id)
  return <AdvertDetails advert={data} />
}

function ErrorHandling({ children }: DOMAttributes<never>) {
  return (
    <ErrorBoundary fallback={<div>Error Occurred</div>}>
      <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
    </ErrorBoundary>
  )
}

function AdvertPage() {
  return (
    <ErrorHandling>
      <AdvertDetailsPage />
    </ErrorHandling>
  )
}

export default AdvertPage
