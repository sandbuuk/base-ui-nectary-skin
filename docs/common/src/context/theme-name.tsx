import { createContext, useContext, useEffect, useState } from 'react'
import type { FC, PropsWithChildren } from 'react'

export type TThemeName = 'light' | 'dark' | 'message-media' | 'simple-texting' | 'mailgun' | 'mailjet' | 'dashboard'

export const DEFAULT_THEME_NAME: TThemeName = 'light'

type TThemeNameContext = {
  themeName: TThemeName,
}

const ThemeNameContext = createContext<TThemeNameContext>({
  themeName: DEFAULT_THEME_NAME,
})

const bus = new BroadcastChannel('MESSAGE_BUS')

type TThemeNameProvider = PropsWithChildren & {
  initialThemeName: TThemeName,
}

export const ThemeNameProvider: FC<TThemeNameProvider> = ({ children, initialThemeName }) => {
  const [themeName, setThemeName] = useState<TThemeName>(initialThemeName)

  useEffect(() => {
    const abortController = new AbortController()

    bus.addEventListener('message', (msg) => {
      if (msg.data.type === 'THEME') {
        setThemeName(msg.data.payload)
      }
    }, { signal: abortController.signal })

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <ThemeNameContext.Provider value={{ themeName }}>
      {children}
    </ThemeNameContext.Provider>
  )
}

export const useThemeName = () => {
  return useContext(ThemeNameContext)
}
