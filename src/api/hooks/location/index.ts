import { Center, County } from '@/api/models/location'
import { CENTER_LIST_URL, COUNTIES_LIST_URL } from '@/api/urls/location'
import { useAxios } from '@/core/hooks/axios'
import { useQuery } from '@tanstack/react-query'

export function useCounties() {
  const axios = useAxios()

  return useQuery<County[]>(['counties'], async () => {
    const { data } = await axios.get<County[]>(`${COUNTIES_LIST_URL}`)
    return data
  })
}

export function useCounty(id: County['id']) {
  const axios = useAxios()

  return useQuery<County>(['counties', id], async () => {
    const { data } = await axios.get<County>(`${COUNTIES_LIST_URL}/${id}`)
    return data
  })
}

export function useCenters() {
  const axios = useAxios()

  return useQuery<Center[]>(['centers'], async () => {
    const { data } = await axios.get<Center[]>(`${CENTER_LIST_URL}`)
    return data
  })
}

export function useCenter(id: Center['id']) {
  const axios = useAxios()

  return useQuery<Center>(['centers', id], async () => {
    const { data } = await axios.get<Center>(`${CENTER_LIST_URL}`)
    return data
  })
}
