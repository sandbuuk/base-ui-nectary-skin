import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/avatar'
import '@nectary/components/button'

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
      <sinch-button
        slot="target"
        size="l"
        aria-label="Open actions"
        on-click={() => setOpen(true)}
      >
        <sinch-avatar slot="icon" src="https://i.pravatar.cc/300" size="m" alt="AB"/>
      </sinch-button>
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
