import type { FC } from 'react'
import '@nectary/components/inline-alert'
import '@nectary/components/icon-button'
import '@nectary/components/icon'

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
