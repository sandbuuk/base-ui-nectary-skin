import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary-assets/icons/laptop'
import '@sinch-engage/nectary-assets/icons/smartphone'
import '@sinch-engage/nectary-assets/icons/tablet'
import '@sinch-engage/nectary-assets/icons/watch'

const selectStyles: CSSProperties = {
  width: 200,
}

const icons: Record<string, JSX.Element> = {
  Laptop: <sinch-icon-laptop slot="icon"/>,
  Smartphone: <sinch-icon-smartphone slot="icon"/>,
  Tablet: <sinch-icon-tablet slot="icon"/>,
  Watch: <sinch-icon-watch slot="icon"/>,
}

export const ButtonExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onChange = (e: CustomEvent<string>) => {
    onClose()
    setValue(e.detail)
  }

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Select"
      orientation="bottom"
      modal
      on-close={onClose}
    >
      <sinch-select-button
        slot="target"
        text={value}
        placeholder="Select option"
        aria-label="Open select"
        style={selectStyles}
        on-click={onOpen}
      >
        {icons[value] ?? null}
      </sinch-select-button>
      <sinch-select-menu
        slot="content"
        aria-label="Action menu"
        value={value}
        on-change={onChange}
      >
        <sinch-select-menu-option
          text="Laptop"
          aria-label="Laptop option"
          value="Laptop"
        >
          {icons.Laptop}
        </sinch-select-menu-option>
        <sinch-select-menu-option
          text="Smartphone"
          aria-label="Smartphone option"
          value="Smartphone"
        >
          {icons.Smartphone}
        </sinch-select-menu-option>
        <sinch-select-menu-option
          text="Tablet"
          aria-label="Tablet option"
          value="Tablet"
          disabled
        >
          {icons.Tablet}
        </sinch-select-menu-option>
        <sinch-select-menu-option
          text="Watch"
          aria-label="Watch option"
          value="Watch"
        >
          {icons.Watch}
        </sinch-select-menu-option>
      </sinch-select-menu>
    </sinch-popover>
  )
}
