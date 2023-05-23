import { MdOutlineMyLocation, MdRefresh } from 'react-icons/md'
import { Button } from '@components/ui/buttons'
import { Input } from '@components/ui/input'
import { useLocation, useNavigate } from 'react-router-dom'
import PageFooter from '@components/page/footer'
import {
  AdvertCard,
  AdvertListState,
  AdvertNoData,
  AdvertsContainer
} from '@components/shared'
import { ErrorBoundary } from 'react-error-boundary'
import { DOMAttributes, Suspense } from 'react'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { useAdverts, usePopularAdvert } from '@/api/hooks/advert'
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
  const { data, refetch } = usePopularAdvert()
  return (
    <>
      {data && data.length > 0 ? (
        data.map(advert => <AdvertCard key={advert.id} advert={advert} />)
      ) : (
        <AdvertNoData>
          <p>Unfortunately there is no data currently</p>
          <Button
            variant='text'
            className={styles.btn_reload}
            onClick={() => refetch()}
          >
            Reload
            <MdRefresh />
          </Button>
        </AdvertNoData>
      )}
      <div />
    </>
  )
}

function NearYou() {
  const { data, refetch } = useAdverts()
  return (
    <>
      {data && data.length > 0 ? (
        data.map(advert => <AdvertCard key={advert.id} advert={advert} />)
      ) : (
        <AdvertNoData>
          <p>Unfortunately there is no data currently</p>
          <Button
            variant='text'
            className={styles.btn_reload}
            onClick={() => refetch()}
          >
            Reload
            <MdRefresh />
          </Button>
        </AdvertNoData>
      )}
      <div />
    </>
  )
}

function ErrorHandling({ children }: DOMAttributes<never>) {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      onReset={reset}
      // eslint-disable-next-line react/no-unstable-nested-components
      fallbackRender={({ resetErrorBoundary }) => (
        <AdvertListState
          state='error'
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      <Suspense fallback={<AdvertListState state='loading' />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default function Default() {
  return (
    <div className={styles.page_root}>
      <Hero />
      <div className={styles.services_root}>
        <p className={styles.services_label}>Popular Services</p>
        <AdvertsContainer>
          <ErrorHandling>
            <PopularServices />
          </ErrorHandling>
        </AdvertsContainer>
      </div>
      <div className={styles.services_root}>
        <p className={styles.services_label}>Services Near You</p>
        <AdvertsContainer>
          <ErrorHandling>
            <NearYou />
          </ErrorHandling>
        </AdvertsContainer>
      </div>
      <PageFooter />
    </div>
  )
}