import { Field, Input } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const EmptyExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Field
      additionalText="Additional text"
      invalidText="Invalid text"
      style={fieldStyles}
    >
      <Input
        aria-label="Input"
        placeholder="Placeholder"
        value={value}
        onChange={setValue}
      />
    </Field>
  )
}
