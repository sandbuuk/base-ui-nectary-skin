import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

export const TypeSubtleSecondaryExample: FC = () => (
  <sinch-button
    text="Click"
    aria-label="Click"
    type="subtle-secondary"
    on-click={() => console.log('click')}
  >
    <sinch-icon slot="icon" name="open_in_new"/>
  </sinch-button>
)
