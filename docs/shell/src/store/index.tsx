import { createContext, useContext, useMemo, useReducer } from 'react'
import type { TAnyAction } from './types'
import type { Reducer, Dispatch, FC, PropsWithChildren } from 'react'

type TState = {
}

type TAction = TAnyAction

const initialState: TState = {}

const appReducer: Reducer<TState, TAction> = (state, _action) => {
  return state
}

const AppStateContext = createContext(initialState)
const AppStateDispatchContext = createContext<Dispatch<TAction>>(() => {})

AppStateContext.displayName = 'AppStateContext'
AppStateDispatchContext.displayName = 'AppStateDispatchContext'

export const useAppState = () => {
  return useContext(AppStateContext)
}

export const useAppDispatch = () => {
  const dispatch = useContext(AppStateDispatchContext)

  return useMemo(() => ({
  }), [dispatch])
}

export const AppStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppStateDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppStateDispatchContext.Provider>
  )
}
