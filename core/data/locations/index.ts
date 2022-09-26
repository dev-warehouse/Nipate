import {useQuery} from "@tanstack/react-query";
import {COUNTIES_LIST_URL, LOCATIONS_LIST_URL, TOWNS_LIST_URL} from "@core/api";
import {County, Location, Town} from "@core/models";
import {useAxios} from "@core/hooks";


export function useCounties() {
    const axios = useAxios()

    return useQuery<County[]>(['counties'], async () => {
        const {
            data,
        } = await axios.get<County[]>(`${COUNTIES_LIST_URL}`)
        return data
    })
}


export function useLocations() {
    const axios = useAxios()

    return useQuery<Location[]>(['counties'], async () => {
        const {
            data,
        } = await axios.get<Location[]>(`${LOCATIONS_LIST_URL}`)
        return data
    })
}

export function useTowns() {
    const axios = useAxios()

    return useQuery<Town[]>(['counties'], async () => {
        const {
            data,
        } = await axios.get<Town[]>(`${TOWNS_LIST_URL}`)
        return data
    })
}
