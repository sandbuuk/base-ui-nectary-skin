import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary-assets/icons/search'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const ComplexExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      style={fieldStyles}
      value={state}
      on-change={(e) => setState(e.detail)}
    >
      <sinch-icon-search slot="icon"/>
      <sinch-tag slot="right" text="Tag 1" color="light-orange"/>
      <sinch-tag slot="right" text="Tag 2" color="light-green"/>
    </sinch-input>
  )
}
