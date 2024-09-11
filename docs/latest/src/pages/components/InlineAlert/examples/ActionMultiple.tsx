import type { FC } from 'react'
import '@nectary/components/inline-alert'
import '@nectary/components/button'
import '@nectary/components/icon'

export const ActionMultipleExample: FC = () => (
  <sinch-inline-alert type="warn" caption="Wait!" text="Are you sure that you want to leave without saving?">
    <sinch-button
      slot="action"
      type="cta-secondary"
      text="Leave"
      aria-label="Leave button"
      size="s"
      on-click={() => console.log('action')}
    />
    <sinch-button
      slot="action"
      type="subtle-secondary"
      text="Cancel"
      aria-label="Cancel button"
      size="s"
      on-click={() => console.log('canceled')}
    />
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
