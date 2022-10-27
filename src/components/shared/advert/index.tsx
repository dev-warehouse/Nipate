import { useLocation, useNavigate } from 'react-router-dom'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import { DOMAttributes, ReactNode } from 'react'
import { IoReload } from 'react-icons/io5'
import { Advert } from '@/api/models/advert'
import { FallbackProps } from 'react-error-boundary'
import { noData } from '@assets/img'
import styles from './index.module.scss'

export interface AdvertCardProps {
  advert?: Advert
  state?: 'default' | 'loading' | 'error'
}

export function AdvertCard({ advert, state }: AdvertCardProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const showAdvert = () => {
    if (advert) {
      navigate(`${advert?.provider.user.displayName}`, {
        state: { modal: location }
      })
    }
  }

  return (
    <ButtonUnstyled
      component='div'
      className={styles.advert_card_root}
      onClick={showAdvert}
    >
      <h3 className={styles.advert_card_title} data-state={state}>
        {advert?.title}
      </h3>
      <div className={styles.advert_card_details}>
        <p className={styles.advert_card_description} data-state={state}>
          {advert?.description}
        </p>
        <div className={styles.advert_card_provider_root} data-state={state}>
          <div
            className={styles.advert_card_provider_profile}
            data-state={state}
          >
            {advert ? (
              <img
                className={styles.advert_card_provider_avatar}
                src={advert?.provider.user.avatar}
                alt={"Provider's Avatar"}
              />
            ) : (
              <div
                className={styles.advert_card_provider_avatar}
                data-state={state}
              />
            )}
            <p>{advert?.provider?.user.displayName}</p>
          </div>
          <p>{advert?.provider?.county.Name}</p>
        </div>
      </div>
    </ButtonUnstyled>
  )
}

AdvertCard.defaultProps = {
  advert: undefined,
  state: 'default'
}

export function AdvertsContainer({ children }: { children: ReactNode }) {
  return (
    <div className={styles.advert_container} tabIndex={-1}>
      {children}
    </div>
  )
}

export function AdvertListState({
  state,
  resetErrorBoundary
}: {
  state: AdvertCardProps['state']
  // eslint-disable-next-line react/require-default-props
  resetErrorBoundary?: FallbackProps['resetErrorBoundary']
}) {
  return (
    <>
      {state === 'error' && (
        <ButtonUnstyled
          component='div'
          onClick={resetErrorBoundary}
          className='absolute top-4 right-2 z-[1] p-2 rounded bg-white shadow font-semibold'
        >
          <IoReload />
        </ButtonUnstyled>
      )}
      <AdvertCard state={state} />
      <AdvertCard state={state} />
      <AdvertCard state={state} />
      <AdvertCard state={state} />
      <AdvertCard state={state} />
      <AdvertCard state={state} />
      <AdvertCard state={state} />
    </>
  )
}

export function AdvertNoData({ children }: DOMAttributes<HTMLDivElement>) {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 p-6'>
      <div>
        <img src={noData} alt='No Data' className='h-20' />
      </div>

      {children ?? <p>Unfortunately there is no data currently</p>}
    </div>
  )
}
