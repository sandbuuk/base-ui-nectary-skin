import type { FC } from 'react'
import '@nectary/components/alert'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-xmark'

export const CloseExample: FC = () => (
  <sinch-alert type="info" text="Informative text">
    <sinch-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon-fa-xmark slot="icon"/>
    </sinch-button>
  </sinch-alert>
)
