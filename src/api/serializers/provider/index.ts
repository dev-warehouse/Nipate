import { Provider } from '@api/models/provider'
import { County } from '@/api/models/location'
import { userDeserializer, UserResponse } from '../user'

export interface ProviderResponse {
  id: number
  User: UserResponse
  County: County
  Provider?: boolean
}

export function providerDeserializer(
  providerResponse: ProviderResponse
): Provider {
  return {
    id: providerResponse.id,
    user: userDeserializer(providerResponse.User),
    county: providerResponse.County,
    isProvider: providerResponse.Provider
  }
}
