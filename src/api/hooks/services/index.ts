import { Service, ServiceCategory } from '@/api/models/service'
import { useAxios } from '@/core/hooks/axios'
import { useQuery } from '@tanstack/react-query'

export function useService() {
  const axios = useAxios()

  return useQuery<Service[]>(['services'], async () => {
    const { data } = await axios.get<Service[]>(``)
    return data
  })
}

export function useServiceCategories() {
  const axios = useAxios()

  return useQuery<ServiceCategory[]>(['service-categories'], async () => {
    const { data } = await axios.get<ServiceCategory[]>(``)
    return data
  })
}
