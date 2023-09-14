import '@nectary/components/icon-button'
import '@nectary/components/icon'
import './styles.css'
import { useEffect } from 'react'
import { useThemeName } from '~/context/theme-control'
import { useNavigateVersion } from '~/hooks'

export const ThemeToggleButton = () => {
  const { versionValue } = useNavigateVersion()
  const { themeName, setThemeName } = useThemeName()
  const onClick = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }
  const isDisabled: boolean = (Boolean(versionValue.startsWith('1'))) || versionValue.startsWith('0')

  useEffect(() => {
    if (isDisabled && themeName !== 'light') {
      setThemeName('light')
    }
  }, [themeName, isDisabled])

  return (
    <sinch-icon-button
      id="toggle-theme-button"
      aria-label="Toggle dark theme"
      on-click={onClick}
      disabled={isDisabled}
    >
      <sinch-icon slot="icon" name="nights_stay"/>
    </sinch-icon-button>
  )
}
