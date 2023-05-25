import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'

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
      <sinch-icon slot="icon" name="close"/>
    </sinch-icon-button>
  </sinch-inline-alert>
)
