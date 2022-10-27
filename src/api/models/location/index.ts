export interface County {
  id: number
  Name: string
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
  Name: string
}

export interface Location {
  latitude: number
  longitude: number
  displayName?: string
}
