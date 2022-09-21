// SITE URLS
export const LOCAL_BASE_URL = 'http://localhost:3000'
export const DEV_BASE_URL = 'https://nipate-web-client-beta.vercel.app'
export const PRODUCTION_BASE_URL = 'https://nipate.me'

// API URLS
export const LOCAL_BASE_API_URL = 'http://localhost:8000'
export const DEV_BASE_API_URL = 'https://nipate-jdwrp.ondigitalocean.app'
export const PRODUCTION_BASE_API_URL = 'https://api.nipate.me'

export let BASE_URL = ''
export let BASE_API_URL = ''

export const location = window && window.location

export const hostname = `${location.protocol}//${location.hostname}`

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
        BASE_URL = `${DEV_BASE_URL}:${location.port}`
        BASE_API_URL = `${PRODUCTION_BASE_API_URL}`
        break
}