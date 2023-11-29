import type { FC } from 'react'
import '@nectary/components/inline-alert'
import '@nectary/components/icon'
import '@nectary/components/button'

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
    <sinch-button
      slot="close"
      aria-label="Close alert"
      size="s"
      on-click={() => console.log('close')}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-button>
  </sinch-inline-alert>
)
