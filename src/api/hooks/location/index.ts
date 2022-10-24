import { County, Town, Location, Center } from '@/api/models/location'
import { useAxios } from '@/core/hooks/axios'
import { useQuery } from '@tanstack/react-query'

export function useCounties() {
  const axios = useAxios()

  return useQuery<County[]>(['counties'], async () => {
    const { data } = await axios.get<County[]>(``)
    return data
  })
}

export function useCounty(id: County['id']) {
  const axios = useAxios()

  return useQuery<County>(['counties', id], async () => {
    const { data } = await axios.get<County>(``)
    return data
  })
}

export function useLocations() {
  const axios = useAxios()

  return useQuery<Location[]>(['locations'], async () => {
    const { data } = await axios.get<Location[]>(``)
    return data
  })
}

export function useLocation(id: Location['displayName']) {
  const axios = useAxios()

  return useQuery<Location>(['locations', id], async () => {
    const { data } = await axios.get<Location>(``)
    return data
  })
}

export function useTowns() {
  const axios = useAxios()

  return useQuery<Town[]>(['towns'], async () => {
    const { data } = await axios.get<Town[]>(``)
    return data
  })
}

export function useTown(id: Town['id']) {
  const axios = useAxios()

  return useQuery<Town>(['towns', id], async () => {
    const { data } = await axios.get<Town>(``)
    return data
  })
}

export function useCenters() {
  const axios = useAxios()

  return useQuery<Center[]>(['centers'], async () => {
    const { data } = await axios.get<Center[]>(``)
    return data
  })
}

export function useCenter(id: Center['id']) {
  const axios = useAxios()

  return useQuery<Center>(['centers', id], async () => {
    const { data } = await axios.get<Center>(``)
    return data
  })
}
