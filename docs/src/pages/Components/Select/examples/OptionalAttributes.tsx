import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/select-option'
import '@sinch-engage/nectary/icons/open-in-new'

const selectStyle: CSSProperties = {
  width: 250,
}

export const OptionalAttributesExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <sinch-select
      label="Select"
      aria-label="Select value"
      optionalText="Optional text"
      additionalText="Additional text"
      invalidText="Invalid text"
      placeholder="Placeholder"
      style={selectStyle}
      value={value}
      onChange={(e) => setValue(e.nativeEvent.detail)}
    >
      <sinch-select-option slot="option" value="1" text="Option 1 value" aria-label="Option 1">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-select-option>
      <sinch-select-option slot="option" value="2" text="Option 2 value" disabled aria-label="Option 2">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-select-option>
      <sinch-select-option slot="option" value="3" text="Option 3 value" disabled={false} aria-label="Option 3"/>
      <sinch-select-option slot="option" value="4" text="Option 4 value" aria-label="Option 4"/>
    </sinch-select>
  )
}
