// SITE URLS

export const LOCAL_BASE_URL = 'http://localhost'
export const DEV_BASE_URL = 'https://nipate-web-client-beta.vercel.app'
export const PRODUCTION_BASE_URL = 'https://nipate.me'

// API URLS
export const LOCAL_BASE_API_URL = 'http://localhost:8000'
export const DEV_BASE_API_URL = 'https://nipate-jdwrp.ondigitalocean.app'
export const PRODUCTION_BASE_API_URL = 'https://api.nipate.me'


const getHostname = (): string => {
    if (process.browser) {
        return `${window.location.protocol}//${window.location.hostname}`
    }
    return ''
}

export const hostname: string = getHostname()
export let BASE_URL = ''
export let BASE_API_URL = ''

switch (hostname) {
    case LOCAL_BASE_URL:
        BASE_URL = LOCAL_BASE_URL
        BASE_API_URL = LOCAL_BASE_API_URL
        break
    case DEV_BASE_URL:
        BASE_URL = DEV_BASE_URL
        BASE_API_URL = DEV_BASE_API_URL
        break
    case PRODUCTION_BASE_URL:
        BASE_URL = PRODUCTION_BASE_URL
        BASE_API_URL = PRODUCTION_BASE_API_URL
        break
    default:
        BASE_API_URL = DEV_BASE_API_URL
        break
}