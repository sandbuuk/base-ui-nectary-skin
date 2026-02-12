import type { FC } from 'react'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/icon'

export const RightIconExample: FC = () => {
  const onClick = () => console.log('click')

  return (
    <sinch-action-menu aria-label="Action menu">
      <sinch-action-menu-option
        text="Build"
        aria-label="Build option"
        on-click={onClick}
      >
        <sinch-icon icons-version="2" name="fa-laptop" slot="icon"/>
        <sinch-icon icons-version="2" name="fa-check" slot="right-icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option
        text="Engage"
        aria-label="Engage option"
        on-click={onClick}
      >
        <sinch-icon icons-version="2" name="smartphone" slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option
        text="Explore More"
        aria-label="Explore More option"
        on-click={onClick}
      >
        <sinch-icon icons-version="2" name="fa-link" slot="icon"/>
        <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="right-icon"/>
      </sinch-action-menu-option>
    </sinch-action-menu>
  )
}
