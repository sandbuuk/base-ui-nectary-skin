import type { FC } from 'react'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/icon'

export const SimpleExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-action-menu aria-label="Action menu">
      <sinch-action-menu-option
        text="Laptop"
        aria-label="Laptop option"
        on-click={onClick}
      >
        <sinch-icon icons-version="2" name="fa-laptop" slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option
        text="Smartphone"
        aria-label="Smartphone option"
        on-click={onClick}
      >
        <sinch-icon icons-version="2" name="smartphone" slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option
        text="Tablet"
        aria-label="Tablet option"
        disabled
        on-click={onClick}
      >
        <sinch-icon icons-version="2" name="fa-tablet" slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option
        text="Watch"
        aria-label="Watch option"
        on-click={onClick}
      >
        <sinch-icon icons-version="2" name="fa-watch-smart" slot="icon"/>
      </sinch-action-menu-option>
    </sinch-action-menu>
  )
}
