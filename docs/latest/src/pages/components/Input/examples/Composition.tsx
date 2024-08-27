import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/tag'
import '@nectary/components/icon'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const CompositionExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-input
      aria-label="Input"
      placeholder="Placeholder"
      style={fieldStyles}
      value={state}
      on-change={(e) => setState(e.detail)}
    >
      <sinch-icon name="fa-magnifying-glass" slot="icon"/>
      <sinch-tag slot="right" text="Tag 1" color="light-orange"/>
      <sinch-tag slot="right" text="Tag 2" color="light-green"/>
    </sinch-input>
  )
}
