import type { FC } from 'react'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/close'
import '@sinch-engage/nectary/button'

export const ActionExample: FC = () => (
  <sinch-inline-alert type="error" caption="Alert" text="Error text">
    <sinch-button
      slot="action"
      type="cta-secondary"
      text="Click"
      aria-label="Action button"
      size="s"
      on-click={() => console.log('action')}
    />
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
