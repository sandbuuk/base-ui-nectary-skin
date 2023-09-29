import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/radio'
import '@nectary/components/radio-option'
import '@nectary/components/field'

const style: CSSProperties = {
  width: 300,
}

export const FieldExample: FC = () => {
  const [value, setValue] = useState('1')
  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  return (
    <sinch-field
      style={style}
      label="Radio group"
      invalidText="Invalid field"
    >
      <sinch-radio slot="input" value={value} on-change={onChange} aria-label="Radio">
        <sinch-radio-option value="1" text="Option 1" aria-label="Option 1"/>
        <sinch-radio-option value="2" disabled text="Option 2" aria-label="Option 2"/>
        <sinch-radio-option value="3" text="Option 3" aria-label="Option 3"/>
      </sinch-radio>
    </sinch-field>
  )
}
