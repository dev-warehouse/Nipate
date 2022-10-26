import { Provider } from '@api/models/provider'
import { userDeserializer, UserResponse } from '../user'
import { countyDeserializer, CountyResponse } from '../location'

export interface ProviderResponse {
  id: number
  User: UserResponse
  Location: CountyResponse
  Provider?: boolean
}

export function providerDeserializer({
  id,
  User,
  Location,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Provider
}: ProviderResponse): Provider {
  return {
    id,
    user: userDeserializer(User),
    location: countyDeserializer(Location),
    isProvider: Provider
  }
}
