import { requestIdleCallback, useDocument, useNavigatePath } from 'docs-common'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import type { Location } from 'history'

type TRouteMessage = {
  type: 'ROUTE',
  payload: Location,
}

const isRouteMessage = (msg: MessageEvent): msg is MessageEvent<TRouteMessage> => {
  return msg.data.type === 'ROUTE'
}

export const useBusNavigate = () => {
  const navigate = useNavigatePath()
  const location = useLocation()
  const locationRef = useRef(location)
  const doc = useDocument()

  locationRef.current = location

  useEffect(() => {
    const controller = new AbortController()
    const onMessage = (msg: MessageEvent) => {
      if (!isRouteMessage(msg)) {
        return
      }

      const { pathname, hash, search } = msg.data.payload

      // console.log('EXTERNAL ROUTE CHANGED', `${locationRef.current.pathname}->${pathname}`, `${locationRef.current.hash}->${hash}`)

      // Test local pathname not matches message pathname
      if (locationRef.current.pathname !== pathname) {
        // Navigate local router

        navigate(pathname, search, hash)
      } else if (hash.length > 0) {
        // Scroll to hash
        requestIdleCallback(() => {
          doc.querySelector(hash)?.scrollIntoView()
        })
      }
    }

    window.addEventListener('message', onMessage, { signal: controller.signal })

    return () => {
      controller.abort()
      window.removeEventListener('message', onMessage)
    }
  }, [])
}
