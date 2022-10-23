import { Center, County, Location } from '../location'
import { Service } from '../service'
import { User } from '../user'

export interface Provider {
  id: number
  User: User
  County: County
}

export interface ProviderProduct {
  id: number
  Provider: Provider
  ServiceTitle: string
  Service: Service
  ServiceDescription: string
  Longitude: Location['longitude']
  Latitude: Location['latitude']
  Location: Center
  workingDays: Day[]
  AgeBracket: AgeBracket
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
