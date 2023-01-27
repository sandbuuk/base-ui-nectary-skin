import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/icons/laptop'
import '@sinch-engage/nectary/icons/smartphone'
import '@sinch-engage/nectary/icons/tablet'
import '@sinch-engage/nectary/icons/watch'

export const ButtonExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onClick = () => {
    onClose()
    console.log('click')
  }

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Dropdown"
      orientation="bottom-right"
      modal
      on-close={onClose}
    >
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Open"
        aria-label="Open dropdown"
        size="s"
        on-click={onOpen}
      />
      <sinch-action-menu slot="content" aria-label="Action menu">
        <sinch-action-menu-option
          text="Laptop"
          aria-label="Laptop option"
          on-click={onClick}
        >
          <sinch-icon-laptop slot="icon"/>
        </sinch-action-menu-option>
        <sinch-action-menu-option
          text="Smartphone"
          aria-label="Smartphone option"
          on-click={onClick}
        >
          <sinch-icon-smartphone slot="icon"/>
        </sinch-action-menu-option>
        <sinch-action-menu-option
          text="Tablet"
          aria-label="Tablet option"
          disabled
          on-click={onClick}
        >
          <sinch-icon-tablet slot="icon"/>
        </sinch-action-menu-option>
        <sinch-action-menu-option
          text="Watch"
          aria-label="Watch option"
          on-click={onClick}
        >
          <sinch-icon-watch slot="icon"/>
        </sinch-action-menu-option>
      </sinch-action-menu>
    </sinch-popover>
  )
}
