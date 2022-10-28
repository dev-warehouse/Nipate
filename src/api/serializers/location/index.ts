import { Center } from '@api/models/location'

export interface CenterResponse {
  id: number
  DisplayName: string
  State: string
  Town: string
  Suburb: string
  Road: string
  Landmark: string
  CenterBlock: string
}

export function centerDeserializer(center: CenterResponse): Center {
  return {
    id: center.id,
    displayName: center.DisplayName,
    state: center.State,
    town: { id: center.Town, name: center.Town },
    suburb: center.Suburb,
    road: center.Road,
    landmark: center.Landmark,
    centerBlock: center.CenterBlock
  }
}
