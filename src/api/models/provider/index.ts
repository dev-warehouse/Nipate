import { Center, County, Location } from '../location'
import { Service } from '../service'
import { User } from '../user'

export interface Provider {
  id: number
  user: User
  location: County
}

export interface ProviderProduct {
  id: number
  provider: Provider
  serviceTitle: string
  service: Service
  serviceDescription: string
  longitude: Location['longitude']
  latitude: Location['latitude']
  location: Center
  workingDays: Day[]
  ageBracket: AgeBracket
}

export enum Day {
  MONDAY = 0,
  SUNDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAYS
}

export type AgeBracket = '18+' | '16+' | '10+' | 'All' | string
