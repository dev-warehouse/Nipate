import { Center, County, Town } from '@api/models/location'

export interface CountyResponse {
  id: number
  Name: string
}

export function countyDeserializer({ Name, ...data }: CountyResponse): County {
  return {
    name: Name,
    ...data
  }
}

export interface TownResponse {
  id: string
  Name: string
}

export function townDeserializer({ id, Name }: TownResponse): Town {
  return {
    id,
    name: Name
  }
}

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
