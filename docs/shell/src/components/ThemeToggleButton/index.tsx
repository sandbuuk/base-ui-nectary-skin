
import '@nectary/components/icon'
import '@nectary/components/popover'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/button'
import './styles.css'
import { useEffect, useState } from 'react'
import type { TThemeName } from 'docs-common'
import { useThemeName } from '~/context/theme-control'
import { useNavigateVersion } from '~/hooks'

export const ThemeToggleButton = () => {
  const { versionValue } = useNavigateVersion()
  const { themeName, setThemeName } = useThemeName()
  const [isOpen, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const onChange = (e: CustomEvent<string>) => {
    onClose()
    setThemeName(e.detail as TThemeName)
  }
  const isDisabled: boolean = (Boolean(versionValue.startsWith('1'))) || versionValue.startsWith('0')

  useEffect(() => {
    if (isDisabled && themeName !== 'light') {
      setThemeName('light')
    }
  }, [themeName, isDisabled])

  return (
    <sinch-popover
      modal
      open={isOpen}
      on-close={onClose}
      aria-label="theme select popover"
      orientation="top-right"
    >
      <sinch-button
        slot="target"
        id="toggle-theme-button"
        aria-label="Toggle dark theme"
        on-click={onOpen}
        disabled={isDisabled}
      >
        <sinch-icon slot="icon" name="nights_stay"/>
      </sinch-button>
      <sinch-select-menu
        slot="content"
        value={themeName}
        on-change={onChange}
        aria-label="theme select menu"
      >
        <sinch-select-menu-option value="light" text="Light" aria-label="light"/>
        <sinch-select-menu-option value="dark" text="Dark" aria-label="dark"/>
        <sinch-select-menu-option value="message-media" text="MessageMedia" aria-label="message media"/>
        <sinch-select-menu-option value="mailgun" text="Mailgun" aria-label="mailgun"/>
        <sinch-select-menu-option value="mailjet" text="Mailjet" aria-label="mailjet"/>
        <sinch-select-menu-option value="dashboard" text="Dashboard" aria-label="dashboard"/>
      </sinch-select-menu>
    </sinch-popover>
  )
}
