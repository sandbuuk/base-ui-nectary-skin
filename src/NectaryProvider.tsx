import React, { createContext, useContext } from 'react'

// Import the Nectary theme CSS custom properties stylesheet.
// This makes all --sinch-* variables available globally.
// Consumers must install @nectary/theme-base as a peer dependency.
//
// Vite resolves this at build time. If @nectary/theme-base is not installed,
// the build will warn but continue — tokens will fall back to CSS fallback values.
import '@nectary/theme-base/css'

export type ColorScheme = 'light' | 'dark' | 'system'

export interface NectaryContextValue {
  colorScheme: ColorScheme
}

const NectaryContext = createContext<NectaryContextValue>({ colorScheme: 'system' })

export function useNectaryContext(): NectaryContextValue {
  return useContext(NectaryContext)
}

export interface NectaryProviderProps {
  children: React.ReactNode
  /** Controls the color scheme applied to the theme. Defaults to `'system'`. */
  colorScheme?: ColorScheme
  /** Additional class names applied to the root element. */
  className?: string
  /** Additional inline styles applied to the root element. */
  style?: React.CSSProperties
}

/**
 * NectaryProvider
 *
 * Wraps your application (or a subtree) to apply Nectary design tokens.
 * - Imports `@nectary/theme-base/css` so `--sinch-*` variables are available.
 * - Toggles `data-color-scheme` on the root `<div>` to switch between light/dark.
 * - Exposes `colorScheme` via context to child components.
 */
export function NectaryProvider({
  children,
  colorScheme = 'system',
  className,
  style,
}: NectaryProviderProps) {
  return (
    <NectaryContext.Provider value={{ colorScheme }}>
      <div
        data-nectary-theme
        data-color-scheme={colorScheme}
        className={className}
        style={style}
      >
        {children}
      </div>
    </NectaryContext.Provider>
  )
}
