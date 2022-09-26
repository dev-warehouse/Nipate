export interface County {
    id: string
    name: string
}

export interface Location {
    id: string
    name: string
    towns: Town[]
}

export interface Town {
    id: string
    name: string
}