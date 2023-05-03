import { DEFAULT_THEME_NAME, ThemeNameProvider } from 'docs-common'
import { createContext, useCallback, useContext, useState } from 'react'
import type { TThemeName } from 'docs-common'
import type { FC, PropsWithChildren } from 'react'

type TThemeControlContext = {
  themeName: TThemeName,
  setThemeName: (theme: TThemeName) => void,
}

const ThemeNameContext = createContext<TThemeControlContext>({
  themeName: DEFAULT_THEME_NAME,
  setThemeName: () => {},
})

const bus = new BroadcastChannel('MESSAGE_BUS')

export const ThemeControlProvider: FC<PropsWithChildren> = ({ children }) => {
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
      <ThemeNameProvider initialThemeName={themeName}>
        {children}
      </ThemeNameProvider>
    </ThemeNameContext.Provider>
  )
}

export const useThemeName = () => {
  return useContext(ThemeNameContext)
}
