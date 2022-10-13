import type { FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/mood'

export const SimpleExample: FC = () => (
  <sinch-icon-button
    aria-label="Smile button"
    on-click={() => console.log('click')}
  >
    <sinch-icon-mood slot="icon"/>
  </sinch-icon-button>
)
