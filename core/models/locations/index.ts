export interface County {
    id: number
    Name: string
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