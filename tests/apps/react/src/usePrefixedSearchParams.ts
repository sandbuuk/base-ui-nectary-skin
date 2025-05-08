import { useSearchParams, useLocation } from 'react-router-dom'
import type { SetURLSearchParams } from 'react-router-dom'

/**
 * Same as useSearchParams() except that search.get() prefixes the query param for /composition/* paths
 *
 * Example:
 *
 * const [search] = useComponentSearchParams("button")
 *
 * search.get("type") // will return value for the query param "button-type"
 *
 */
export const useComponentSearchParams = (prefix: string): [URLSearchParams, SetURLSearchParams] => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  const prefixedSearchParams = new URLSearchParams()

  prefixedSearchParams.get = function(key: string) {
    const shouldAddPrefix = prefix.length > 0 && location.pathname.startsWith('/composition')
    const prefixedKey = shouldAddPrefix ? `${prefix}-${key}` : key

    return searchParams.get(prefixedKey)
  }

  return [prefixedSearchParams, setSearchParams]
}
