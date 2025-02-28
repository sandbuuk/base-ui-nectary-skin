import { useCallback } from 'react'
import type { Location } from 'history'

type TRouteBusResult = (location: Location) => void

export const useOnRouteChange = (): TRouteBusResult => {
  return useCallback((payload: Location) => {
    window.postMessage({
      type: 'ROUTE',
      payload,
    }, window.origin)
  }, [])
}
