import { ServiceCategory } from '../service'
import { User, UserLocation } from '../user'

export interface Advert {
  id: number
  ADTitle: string
  User: User
  Service: ServiceCategory
  Location: UserLocation
  AdDescription: string
  StartDate: Date
  ExpiryDate: Date
  NoOfMessages: number
}
