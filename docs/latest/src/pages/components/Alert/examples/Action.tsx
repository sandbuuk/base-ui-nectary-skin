import type { FC } from 'react'
import '@nectary/components/alert'
import '@nectary/components/button'
import '@nectary/components/icon'

export const ActionExample: FC = () => (
  <sinch-alert type="error" text="Error text">
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
  </sinch-alert>
)
