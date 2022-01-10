import { createContext, useCallback, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { FC } from 'react'

const paths = ['/step-1', '/onboarding', '/step-2', '/step-3', '/step-4'] as const
type TKnownPath = typeof paths[number]

// const isKnownPath = (value: string): value is TKnownPath => (paths as readonly string[]).includes(value)
const getNextPath = (value: string): TKnownPath => {
  const i = (paths as readonly string[]).indexOf(value)

  if (i >= 0 && i < paths.length - 1) {
    return paths[i + 1]
  }

  return paths[i]
}

type TPageContext = {
  next: () => void,
  reset: () => void,
}

const Context = createContext<TPageContext>({
  next: () => {},
  reset: () => {},
})

export const usePageControl = () => {
  return useContext(Context)
}

export const PageContext: FC<{}> = ({ children }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const next = useCallback(() => {
    navigate(getNextPath(pathname))
  }, [navigate, pathname])
  const reset = useCallback(() => {
    navigate(paths[0])
  }, [navigate])

  const state: TPageContext = {
    next,
    reset,
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}
