import type { FC } from 'react'
import '@nectary/components/toast'
import '@nectary/components/icon'
import '@nectary/components/button'

export const CloseExample: FC = () => (
  <sinch-toast type="info" text="Info">
    <sinch-button
      slot="close"
      aria-label="Close"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-button>
  </sinch-toast>
)
