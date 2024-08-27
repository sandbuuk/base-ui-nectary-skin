import type { FC } from 'react'
import '@nectary/components/alert'
import '@nectary/components/button'
import '@nectary/components/icon'

export const CloseExample: FC = () => (
  <sinch-alert type="info" text="Informative text">
    <sinch-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon name="fa-xmark" slot="icon"/>
    </sinch-button>
  </sinch-alert>
)
