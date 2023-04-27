import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'
import './styles.css'
import { useThemeName } from '~/context/theme-control'

export const ThemeToggleButton = () => {
  const { themeName, setThemeName } = useThemeName()
  const onClick = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }

  return (
    <sinch-icon-button
      id="toggle-theme-button"
      aria-label="Toggle dark theme"
      on-click={onClick}
    >
      <sinch-icon slot="icon" name="nights_stay"/>
    </sinch-icon-button>
  )
}
