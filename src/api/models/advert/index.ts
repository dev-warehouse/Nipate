import { County } from '../location'
import { Provider } from '../provider'
import { Service } from '../service'

export interface Advert {
  id: number
  title: string
  provider: Provider
  service: Service
  location: County
  description: string
  startDate: Date
  expiryDate: Date
  noOfMessages: number
}
