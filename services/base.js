import config from "../config";
import queryString from 'query-string'
class Base {
    getRequest = (uri, query) => this.baseRequest('GET', uri, null, query)

    baseRequest = async (type, uri, data = null, query = null) => {
        const queryUrl = query ? `?${queryString.stringify(query, {
            skipEmptyString: true,
            skipNull: true,
        })}` : ''

        const fullUrl = `${config.apiBaseUrl}/${uri}${queryUrl}`
        const res = await fetch(fullUrl, {
            method: type,
            headers: {
                'Accept-Language': 'en',
                ...(typeof window !== 'undefined' && data instanceof Blob) ? {} : { 'Content-Type': 'application/json' }
            },
            body: data,
        })
        if (!res.ok) {
            const err = await res.json()
            throw new Error(err.message || 'something went wrong')
        }
        return res.json()
    }
}
export default Base