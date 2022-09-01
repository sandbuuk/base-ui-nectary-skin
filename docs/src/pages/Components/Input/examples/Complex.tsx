import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/close'

export const ComplexExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      value={state}
      on-change={(e) => setState(e.detail)}
    >
      <sinch-icon-search slot="icon"/>
      <sinch-tag slot="right" text="Tag"/>
      <sinch-icon-button
        slot="right"
        aria-label="Clear search"
        small
        on-click={() => console.log('click')}
      >
        <sinch-icon-close slot="icon"/>
      </sinch-icon-button>
    </sinch-input>
  )
}
