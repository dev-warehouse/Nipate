import { Service } from '@/api/models/service'
import {
  providerDeserializer,
  ProviderResponse
} from '@api/serializers/provider'
import { Advert } from '@api/models/advert'
import { County } from '@/api/models/location'

export interface AdvertResponse {
  id: number
  ADTitle: string
  Provider: ProviderResponse
  Service: Service[]
  Location: County
  AdDescription: string
  StartDate: string
  ExpiryDate: string
  NoOfMessages: number
}

export function advertDeserializer(advert: AdvertResponse): Advert {
  return {
    id: advert.id,
    title: advert.ADTitle,
    provider: providerDeserializer(advert.Provider),
    location: advert.Location,
    service: advert.Service,
    description: advert.AdDescription,
    startDate: new Date(advert.StartDate),
    expiryDate: new Date(advert.ExpiryDate),
    noOfMessages: advert.NoOfMessages
  }
}
