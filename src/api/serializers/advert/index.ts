import { Service } from '@/api/models/service'
import {
  providerDeserializer,
  ProviderResponse
} from '@api/serializers/provider'
import { countyDeserializer, CountyResponse } from '@api/serializers/location'
import { Advert } from '@api/models/advert'

export interface AdvertResponse {
  id: number
  ADTitle: string
  Provider: ProviderResponse
  Service: Service[]
  Location: CountyResponse
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
    location: countyDeserializer(advert.Location),
    service: advert.Service,
    description: advert.AdDescription,
    startDate: new Date(advert.StartDate),
    expiryDate: new Date(advert.ExpiryDate),
    noOfMessages: advert.NoOfMessages
  }
}
