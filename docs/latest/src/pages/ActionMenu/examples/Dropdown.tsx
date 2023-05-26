import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/avatar'

export const DropdownExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const onClick = () => {
    console.log('click')
    setOpen(false)
  }

  return (
    <sinch-popover
      open={isOpen}
      orientation="bottom-right"
      on-close={() => setOpen(false)}
      aria-label="Action Menu"
    >
      <sinch-icon-button
        slot="target"
        size="l"
        aria-label="Open actions"
        on-click={() => setOpen(true)}
      >
        <sinch-avatar slot="icon" src="https://i.pravatar.cc/300" size="m" alt="AB"/>
      </sinch-icon-button>
      <sinch-action-menu slot="content" aria-label="Action menu">
        <sinch-action-menu-option
          text="Profile"
          aria-label="Profile"
          on-click={onClick}
        />
        <sinch-action-menu-option
          text="Preferences"
          aria-label="Preferences"
          on-click={onClick}
        />
        <sinch-action-menu-option
          text="Sign out"
          aria-label="Sign out"
          on-click={onClick}
        />
      </sinch-action-menu>
    </sinch-popover>
  )
}
