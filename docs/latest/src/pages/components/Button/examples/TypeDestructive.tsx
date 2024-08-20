import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/icon'

export const TypeDestructiveExample: FC = () => (

  <sinch-button
    text="Click"
    aria-label="Click"
    type="destructive"
    on-click={() => console.log('click')}
  >
    <sinch-icon name="fa-arrow-up-right-from-square" slot="icon"/>
  </sinch-button>
)
