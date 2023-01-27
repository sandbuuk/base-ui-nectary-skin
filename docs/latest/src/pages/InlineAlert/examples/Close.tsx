import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

export const CloseExample: FC = () => (
  <sinch-inline-alert
    type="info"
    caption="Information"
    text="Informative text"
  >
    <sinch-icon-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon-close slot="icon"/>
    </sinch-icon-button>
  </sinch-inline-alert>
)
