import type { FC } from 'react'
import '@nectary/components/alert'
import '@nectary/components/icon'
import '@nectary/components/button'

export const CloseExample: FC = () => (
  <sinch-alert type="info" text="Informative text">
    <sinch-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-button>
  </sinch-alert>
)
