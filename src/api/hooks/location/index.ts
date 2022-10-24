import { County, Town, Location } from '@/api/models/location'
import { useAxios } from '@/core/hooks/axios'
import { useQuery } from '@tanstack/react-query'

export function useCounties() {
  const axios = useAxios()

  return useQuery<County[]>(['counties'], async () => {
    const { data } = await axios.get<County[]>(``)
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

export function useTowns() {
  const axios = useAxios()

  return useQuery<Town[]>(['towns'], async () => {
    const { data } = await axios.get<Town[]>(``)
    return data
  })
}
