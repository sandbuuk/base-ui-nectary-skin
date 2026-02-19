import { Field, HelpTooltip, Input } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Field
      label="Input"
      additionalText="Additional text"
      optionalText="Optional text"
      invalidText="Invalid text"
      tooltip={<HelpTooltip text="Tooltip text"/>}
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
