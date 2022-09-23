// SITE URLS

export const LOCAL_BASE_URL = 'http://localhost'
export const DEV_BASE_URL = 'https://nipate-web-client-beta.vercel.app'
export const PRODUCTION_BASE_URL = 'https://nipate.me'

// API URLS
export const LOCAL_BASE_API_URL = 'http://localhost:8000'
export const DEV_BASE_API_URL = 'https://nipate-jdwrp.ondigitalocean.app'
export const PRODUCTION_BASE_API_URL = 'https://api.nipate.me'

const proxy = (): string => {
    let hostname: string = ''
    if (process.browser) {
        hostname = `${window.location.protocol}//${window.location.hostname}`
    }

    switch (hostname) {
        case LOCAL_BASE_URL:
            BASE_URL = LOCAL_BASE_URL
            return LOCAL_BASE_API_URL
        case DEV_BASE_URL:
            BASE_URL = DEV_BASE_URL
            return DEV_BASE_API_URL

        case PRODUCTION_BASE_URL:
            BASE_URL = PRODUCTION_BASE_URL
            return PRODUCTION_BASE_API_URL

        default:
            return DEV_BASE_API_URL
    }
}

export let BASE_URL = ''
export let BASE_API_URL = proxy()
