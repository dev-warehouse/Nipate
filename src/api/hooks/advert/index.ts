import { Advert } from '@/api/models/advert'
import { Center, County, Town } from '@/api/models/location'
import { Service, ServiceCategory } from '@/api/models/service'
import { useAxios } from '@/core/hooks/axios'
import { useQuery } from '@tanstack/react-query'
import { ADVERT_LIST_URL, ADVERT_SEARCH_URL } from '@api/urls/advert'
import { advertDeserializer, AdvertResponse } from '@api/serializers/advert'

export function useAdverts() {
  const axios = useAxios()

  return useQuery<Advert[]>(['adverts'], async () => {
    const { data: res } = await axios.get<Advert[]>(`${ADVERT_LIST_URL}`, {
      transformResponse: data => {
        const json: AdvertResponse[] = JSON.parse(data)
        return json.map<Advert>(r => advertDeserializer(r))
      }
    })
    return res
  })
}

export function useAdvert(id: Advert['id']) {
  const axios = useAxios()

  return useQuery<Advert>(['advert', id], async () => {
    const { data: res } = await axios.get<Advert>(`${ADVERT_LIST_URL}`, {
      transformResponse: data => advertDeserializer(JSON.parse(data))
    })
    return res
  })
}

export function useFilterAdvert(
  searchText:
    | Advert['title']
    | Service['Name']
    | County['Name']
    | Town['Name']
    | Center['displayName']
    | ServiceCategory['Name']
) {
  const axios = useAxios()

  return useQuery<Advert[]>(['adverts', searchText], async () => {
    const { data: res } = await axios.get<Advert[]>(`${ADVERT_SEARCH_URL}`, {
      transformResponse: data => advertDeserializer(JSON.parse(data))
    })
    return res
  })
}

export function usePopularAdvert() {
  const axios = useAxios()

  return useQuery<Advert[]>(['adverts', 'popular'], async () => {
    const { data: res } = await axios.get<Advert[]>(`${ADVERT_LIST_URL}`, {
      transformResponse: data => {
        const json: AdvertResponse[] = JSON.parse(data)
        return json.map<Advert>(r => advertDeserializer(r))
      }
    })
    return res
  })
}
