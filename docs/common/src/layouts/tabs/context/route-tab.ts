import { createContext, useContext } from 'react'

export type TRouteTab = {
  value: string,
  text: string,
  route: string,
}

type TRouteTabContext = {
  getRouteTabs: (route: string) => TRouteTab[] | null,
}

const RouteTabContext = createContext<TRouteTabContext>({
  getRouteTabs() {
    throw new Error('Not implemented')
  },
})

export const RouteTabProvider = RouteTabContext.Provider

export const useRouteTabInfo = () => {
  return useContext(RouteTabContext)
}
