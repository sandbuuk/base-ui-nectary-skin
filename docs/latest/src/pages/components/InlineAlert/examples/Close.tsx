import type { FC } from 'react'
import '@nectary/components/inline-alert'
import '@nectary/components/button'
import '@nectary/components/icon'

export const CloseExample: FC = () => (
  <sinch-inline-alert
    type="info"
    caption="Information"
    text="Informative text"
  >
    <sinch-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
    </sinch-button>
  </sinch-inline-alert>
)
