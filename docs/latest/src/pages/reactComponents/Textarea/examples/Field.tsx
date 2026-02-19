import { Field, HelpTooltip, Textarea } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const fieldStyles: CSSProperties = {
  width: 300,
}

export const FieldExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Field
      label="Textarea"
      additionalText="Additional text"
      optionalText="Optional text"
      invalidText="Invalid text"
      tooltip={<HelpTooltip text="Tooltip text"/>}
      style={fieldStyles}
    >
      <Textarea
        aria-label="Textarea"
        placeholder="Placeholder"
        value={value}
        onChange={setValue}
      />
    </Field>
  )
}
