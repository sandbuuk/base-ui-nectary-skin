import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/input'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const NumberExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-field label="Number" style={fieldStyles}>
      <sinch-input
        slot="input"
        type="number"
        min={10}
        max={100}
        aria-label="Number Input"
        placeholder="Only numbers allowed here"
        value={state}
        on-change={(e) => setState(e.detail)}
        // Known issue with react and native number input causing numbers to change on scroll, see:
        // https://stackoverflow.com/questions/63224459/disable-scrolling-on-input-type-number-in-react
        on-wheel={(e) => e.target.blur()}
      />
    </sinch-field>
  )
}
