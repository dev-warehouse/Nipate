import Axios, {AxiosInstance} from "axios"
import {createContext} from "react"

export const axiosInstance = Axios.create({
    headers: {
        'Content-type': 'application/json',
    },
})

export const AxiosContext = createContext<AxiosInstance>(axiosInstance)

