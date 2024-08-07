import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/select-button'
import '@nectary/assets/icons/fa-tablet'
import '@nectary/assets/icons/fa-watch'
import '@nectary/assets/icons/fa-laptop'
import '@nectary/assets/icons/smartphone'

const selectStyles: CSSProperties = {
  width: 200,
}

const icons: Record<string, JSX.Element> = {
  Laptop: <sinch-icon-fa-laptop slot="icon"/>,
  Smartphone: <sinch-icon-smartphone slot="icon"/>,
  Tablet: <sinch-icon-fa-tablet slot="icon"/>,
  Watch: <sinch-icon-fa-watch slot="icon"/>,
}

export const MultipleExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onChange = (e: CustomEvent<string>) => setValue(e.detail)

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
        text={value.includes(',') ? 'Multiple selected' : value}
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
        multiple
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
