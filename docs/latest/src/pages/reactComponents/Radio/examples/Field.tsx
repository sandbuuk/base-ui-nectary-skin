import { Field, Radio, RadioOption } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const FieldExample: FC = () => {
  const [value, setValue] = useState('1')

  return (
    <Field
      style={fieldStyles}
      label="Radio group"
      invalidText="Invalid field"
    >
      <Radio value={value} onChange={setValue} aria-label="Radio">
        <RadioOption value="1" text="Option 1"/>
        <RadioOption value="2" text="Option 2" disabled/>
        <RadioOption value="3" text="Option 3"/>
      </Radio>
    </Field>
  )
}
