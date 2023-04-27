import { createContext, useCallback, useContext, useState } from 'react'
import type { FC, PropsWithChildren } from 'react'

export type TThemeName = 'light' | 'dark'

const DEFAULT_THEME_NAME: TThemeName = 'light'

type TThemeNameContext = {
  themeName: TThemeName,
  setThemeName: (theme: TThemeName) => void,
}

const ThemeNameContext = createContext<TThemeNameContext>({
  themeName: DEFAULT_THEME_NAME,
  setThemeName: () => {},
})

const bus = new BroadcastChannel('MESSAGE_BUS')

export const ThemeNameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState<TThemeName>(() => {
    return localStorage.getItem('themeName') as TThemeName ?? DEFAULT_THEME_NAME
  })
  const setThemeNameBus = useCallback((themeName: TThemeName) => {
    setThemeName(themeName)
    localStorage.setItem('themeName', themeName)
    bus.postMessage({
      type: 'THEME',
      payload: themeName,
    })
  }, [])

  return (
    <ThemeNameContext.Provider value={{ themeName, setThemeName: setThemeNameBus }}>
      {children}
    </ThemeNameContext.Provider>
  )
}

export const useThemeName = () => {
  return useContext(ThemeNameContext)
}
