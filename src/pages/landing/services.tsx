import styles from './index.module.scss'

interface ServicesProps {
  url: string
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

function AdvertItem({ title, description }: Advert) {
  return (
    <div className={styles.advert_root}>
      <h3 className={styles.advert_title}>{title}</h3>
      <p className={styles.advert_description}>{description}</p>
    </div>
  )
}

function AdvertList({ url, label }: ServicesProps) {
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
      {adverts.map((advert, index) => (
        <AdvertItem key={`${advert.provider.userId}${index}`} {...advert} />
      ))}
    </div>
  )
}

export default function Services({ url, label }: ServicesProps) {
  return (
    <div className={styles.services_root}>
      <p className={styles.services_label}>{label}</p>
      <AdvertList url={url} label={label} />
    </div>
  )
}
