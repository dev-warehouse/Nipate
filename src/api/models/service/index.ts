export interface ServiceCategory {
  id: number
  Name: string
}

export interface Service {
  id: number
  Name: string
  CategoryID: ServiceCategory['id']
}
