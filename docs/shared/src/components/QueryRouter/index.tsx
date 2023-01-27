import { createBrowserHistory } from 'history'
import { useLayoutEffect, useRef, useState } from 'react'
import { Router } from 'react-router-dom'
import type { BrowserHistory, Location } from 'history'
import type { FC } from 'react'
import type { BrowserRouterProps } from 'react-router-dom'

type TQueryRouter = BrowserRouterProps & {
  basename: string,
  onChange?: (location: Location) => void,
}

const getPathFromSearch = (location: Location) => {
  const params = new URLSearchParams(location.search)
  const path = params.get('path') ?? '/'

  params.delete('path')

  return {
    path,
    search: params.toString(),
  }
}

export const QueryRouter: FC<TQueryRouter> = ({ basename, children, window, onChange }) => {
  const historyRef = useRef<BrowserHistory>()

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window })
  }

  const history = historyRef.current
  const [state, setState] = useState(() => {
    const { path, search } = getPathFromSearch(history.location)
    const location: Location = {
      pathname: basename + path,
      search,
      hash: history.location.hash,
      key: '',
      state: null,
    }

    return ({
      action: history.action,
      location,
    })
  })

  useLayoutEffect(() => {
    return history.listen((update) => {
      const { path, search } = getPathFromSearch(update.location)

      onChange?.({
        pathname: path,
        search,
        hash: update.location.hash,
        key: '',
        state: null,
      })
      setState({
        action: update.action,
        location: {
          pathname: basename + path,
          search,
          hash: update.location.hash,
          key: '',
          state: null,
        },
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
