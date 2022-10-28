export interface County {
  id: number
  name: string
}

export interface Center {
  id: number
  displayName: string
  state: string
  town: Town
  suburb: string
  road: string
  landmark: string
  centerBlock: string
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
