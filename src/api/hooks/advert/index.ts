import { Advert } from '@/api/models/advert'
import { Center, County, Location, Town } from '@/api/models/location'
import { Service, ServiceCategory } from '@/api/models/service'
import { useAxios } from '@/core/hooks/axios'
import { useQuery } from '@tanstack/react-query'

export function useAdverts() {
  const axios = useAxios()

  return useQuery<Advert[]>(['adverts'], async () => {
    const { data } = await axios.get<Advert[]>(``)
    return data
  })
}

export function useAdvert(id: Advert['id']) {
  const axios = useAxios()

  return useQuery<Advert>(['advert', id], async () => {
    const { data } = await axios.get<Advert>(``)
    return data
  })
}

export function useFilterAdvert(
  searchText:
    | Advert['ADTitle']
    | Service['Name']
    | County['Name']
    | Town['name']
    | Center['DisplayName']
    | ServiceCategory['Name']
) {
  const axios = useAxios()

  return useQuery<Advert[]>(['adverts', searchText], async () => {
    const { data } = await axios.get<Advert[]>(``)
    return data
  })
}

export function useProximityAdvert(location: Location) {
  const axios = useAxios()

  return useQuery<Advert[]>(['adverts', location], async () => {
    const { data } = await axios.get<Advert[]>(``)
    return data
  })
}

export function usePopularAdvert() {
  const axios = useAxios()

  return useQuery<Advert[]>(['adverts', 'popular'], async () => {
    const { data } = await axios.get<Advert[]>(``)
    return data
  })
}
