import { useCallback } from 'react'
import type { Location } from 'history'

const bus = new BroadcastChannel('MESSAGE_BUS')

type TRouteBusResult = (location: Location) => void

export const useOnRouteChange = (): TRouteBusResult => {
  return useCallback((payload: Location) => {
    bus.postMessage({
      type: 'ROUTE',
      payload,
    })
  }, [])
}
