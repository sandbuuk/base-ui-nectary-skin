import type { FC } from 'react'
import '@sinch-engage/nectary/alert'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export const CloseExample: FC = () => (
  <sinch-alert type="info" text="Informative text">
    <sinch-icon-button
      slot="close"
      aria-label="Close alert"
      small
      on-click={() => console.log('close')}
    >
      <sinch-icon-close slot="icon"/>
    </sinch-icon-button>
  </sinch-alert>
)
