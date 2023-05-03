import { createContext, useContext, useEffect, useRef } from 'react'
import { useRerender } from '../hooks'
import type { FC, PropsWithChildren } from 'react'

const EMPTY_DEPS: any[] = []

type TPagePortalsContext = {
  navmenu: HTMLElement | null,
}

const PagePortalsContext = createContext<TPagePortalsContext>({
  navmenu: null,
})

export const PagePortalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const valueRef = useRef<TPagePortalsContext | null>(null)

  if (valueRef.current === null) {
    valueRef.current = {
      navmenu: null,
    }
  }

  return (
    <PagePortalsContext.Provider value={valueRef.current}>
      {children}
    </PagePortalsContext.Provider>
  )
}

export const usePortalsRefs = () => {
  const portals = useContext(PagePortalsContext)

  return {
    setNavElement(el: HTMLElement | null) {
      portals.navmenu = el
    },
  }
}

const arePortalsReady = (portals: TPagePortalsContext): boolean => {
  return portals.navmenu !== null
}

export const usePortalsReady = (): boolean => {
  const portals = useContext(PagePortalsContext)
  const portalsReadyRef = useRef(false)
  const rerender = useRerender()

  portalsReadyRef.current = arePortalsReady(portals)

  useEffect(() => {
    const portalsReadyNow = arePortalsReady(portals)

    if (portalsReadyRef.current === false && portalsReadyNow) {
      portalsReadyRef.current = true
      rerender()
    }
  }, EMPTY_DEPS)

  return portalsReadyRef.current
}

export const usePortalNavmenu = (): HTMLElement | null => {
  const portals = useContext(PagePortalsContext)

  return portals.navmenu
}
