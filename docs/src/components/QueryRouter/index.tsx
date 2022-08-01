import { createBrowserHistory } from 'history'
import { useLayoutEffect, useRef, useState } from 'react'
import { Router } from 'react-router-dom'
import type { BrowserHistory, Location } from 'history'
import type { FC } from 'react'
import type { BrowserRouterProps } from 'react-router-dom'

const getSearchPath = (location: Location): string => {
  return new URLSearchParams(location.search).get('path') ?? '/'
}

export const QueryRouter: FC<BrowserRouterProps> = ({ basename, children, window }) => {
  const historyRef = useRef<BrowserHistory>()

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window })
  }

  const history = historyRef.current
  const [state, setState] = useState(() => ({
    action: history.action,
    location: basename + getSearchPath(history.location),
  }))

  useLayoutEffect(() => {
    return history.listen((update) => {
      setState({
        action: update.action,
        location: basename + getSearchPath(update.location),
      })
    })
  }, [history])

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  )
}
