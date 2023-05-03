import { createContext, useContext } from 'react'

type TRouteTitleContext = {
  getRouteTitle: (route: string) => string | null,
}

const RouteTitleContext = createContext<TRouteTitleContext>({
  getRouteTitle() {
    throw new Error('Not implemented')
  },
})

export const RouteTitleProvider = RouteTitleContext.Provider

export const useRouteTitleInfo = () => {
  return useContext(RouteTitleContext)
}
