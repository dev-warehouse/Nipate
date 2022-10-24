import { County, Town } from '@core/models/location'
import { Service } from '../service'
import { User } from '../user'

export interface Advert {
  id: number
  ADTitle: string
  User: User
  Service: Service
  Location: County | Town
  AdDescription: string
  StartDate: Date
  ExpiryDate: Date
  NoOfMessages: number
}
