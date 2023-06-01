import { createContext, useContext, useEffect } from 'react'
import { useRerender } from '../hooks'

const EMPTY_DEPS: any[] = []

type TPagePortalsContext = {
  navmenu: HTMLElement | null,
}

const PagePortalsContext = createContext<TPagePortalsContext>({
  navmenu: null,
  // Add more portal elements here
})

export const usePortalSetters = () => {
  const portals = useContext(PagePortalsContext)

  return {
    setNavElement(el: HTMLElement | null) {
      portals.navmenu = el
    },
    // Add more portal setters here
  }
}

const arePortalsReady = (portals: TPagePortalsContext): boolean => {
  // Should return 'true' if all portals are valid
  return portals.navmenu !== null
}

export const usePortalsReady = (): boolean => {
  const portals = useContext(PagePortalsContext)
  const rerender = useRerender()

  // Just Rerender once and expect that portals become ready
  useEffect(rerender, EMPTY_DEPS)

  return arePortalsReady(portals)
}

export const usePortalNavmenu = (): HTMLElement | null => {
  const portals = useContext(PagePortalsContext)

  return portals.navmenu
}
