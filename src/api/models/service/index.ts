export interface ServiceCategory {
  id: number
  name: string
}

export interface Service {
  id: number
  name: string
  categoryID: ServiceCategory['id']
}
