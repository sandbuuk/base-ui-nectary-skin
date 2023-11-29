import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

export const TypeSubtlePrimaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="subtle-primary"
    on-click={() => console.log('click')}
  >
    <sinch-icon slot="icon" name="open_in_new"/>
  </sinch-button>
)
