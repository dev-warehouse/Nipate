export interface County {
  id: number
  Name: string
}

export interface Center {
  id: number
  DisplayName: string
  State: string
  Town: Town
  Suburb: string
  Road: string
  Landmark: string
  CenterBlock: string
}

export interface Town {
  id: string
  name: string
}

export interface Location {
  latitude: number
  longitude: number
  displayName?: string
}
