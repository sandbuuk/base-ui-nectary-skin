import type { FC } from 'react'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/assets/icons/laptop'
import '@nectary/assets/icons/smartphone'
import '@nectary/assets/icons/tablet'
import '@nectary/assets/icons/watch'

export const SimpleExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-action-menu aria-label="Action menu">
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
  )
}
