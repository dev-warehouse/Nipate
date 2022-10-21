import { useLocation, useNavigate } from 'react-router-dom'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import { ReactNode } from 'react'
import styles from './index.module.scss'

export interface AdvertCardProps {
  advert?: {
    title: string
    description: string
    provider: {
      location: string
      name: string
      avatar: string
    }
  }
  state?: 'default' | 'loading' | 'error'
}

export function AdvertCard({ advert, state }: AdvertCardProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const advertUrl: string =
    advert?.provider.name.split(' ').join('_').toLowerCase() ?? '.'

  const showAdvert = () =>
    navigate(`${advert ? `advert/${advertUrl}` : '.'}`, {
      state: { modal: location }
    })

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
                src={advert?.provider.avatar}
                alt={"Provider's Avatar"}
              />
            ) : (
              <div
                className={styles.advert_card_provider_avatar}
                data-state={state}
              />
            )}
            <p>{advert?.provider?.name}</p>
          </div>
          <p>{advert?.provider?.location}</p>
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
