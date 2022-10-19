import { AdvertCard } from '@components/shared'
import styles from './index.module.scss'

interface ServicesProps {
  label: string
}

interface Advert {
  title: string
  description: string
  provider: {
    location: string
    name: string
    userId: string
  }
}

function AdvertListLoading() {
  return (
    <div className={styles.advert_list}>
      <AdvertCard state='loading' />
      <AdvertCard state='loading' />
      <AdvertCard state='loading' />
      <AdvertCard state='loading' />
      <AdvertCard state='loading' />
      <AdvertCard state='loading' />
    </div>
  )
}

function AdvertList() {
  const adverts: Advert[] = [
    {
      title: 'Catering',
      description: 'I do catering',
      provider: {
        location: 'Nakuru',
        name: 'Cater Kiamunyi',
        userId: 'sjhdjhjsdjfhjsdhj'
      }
    },
    {
      title: 'Catering',
      description: 'I do catering',
      provider: {
        location: 'Nakuru',
        name: 'Cater Kiamunyi',
        userId: 'sjhdjhjsdjfhjsdhj'
      }
    },
    {
      title: 'Advert title',
      description:
        'Description: Officia facilis accusantium deleniti officiis unde. Velit nemo iusto quod laborum debitis aliquam nam necessitatibus. Quia quod possimus sunt et cumque neque. Aut adipisci tempora aut est sint. In facilis dolorem est voluptas ut.',
      provider: {
        location: 'Kagemi, Nairobi',
        name: 'Rafiki cafe',
        userId: 'NakuruRafiki'
      }
    },
    {
      title: 'Advert title',
      description:
        'Description: Officia facilis accusantium deleniti officiis unde. Velit nemo iusto quod laborum debitis aliquam nam necessitatibus. Quia quod possimus sunt et cumque neque. Aut adipisci tempora aut est sint. In facilis dolorem est voluptas ut.',
      provider: {
        location: 'Kagemi, Nairobi',
        name: 'Rafiki cafe',
        userId: 'NakuruRafiki'
      }
    },
    {
      title: 'Advert title',
      description:
        'Description: Officia facilis accusantium deleniti officiis unde. ',
      provider: {
        location: 'Kagemi, Nairobi',
        name: 'Rafiki cafe',
        userId: 'NakuruRafiki'
      }
    }
  ]
  return (
    <div className={styles.advert_list}>
      {adverts.map(({ provider: { userId, ...provider }, ...advert }) => (
        <AdvertCard
          advert={{
            ...advert,
            provider: {
              avatar: `https://avatars.dicebear.com/api/adventurer/${userId}.svg`,
              ...provider
            }
          }}
        />
      ))}
    </div>
  )
}

export default function Services({ label }: ServicesProps) {
  return (
    <div className={styles.services_root}>
      <p className={styles.services_label}>{label}</p>
      <AdvertList />
      <AdvertListLoading />
    </div>
  )
}
