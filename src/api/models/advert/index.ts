import { County, Town } from '../location'
import { Provider } from '../provider'
import { Service } from '../service'

export interface Advert {
  id: number
  title: string
  provider: Provider
  service: Service
  location: County | Town
  description: string
  startDate: Date
  expiryDate: Date
  noOfMessages: number
}
