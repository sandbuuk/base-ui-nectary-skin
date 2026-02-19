import { Input } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'

const inputStyles: CSSProperties = {
  width: 300,
}

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      value={value}
      onChange={setValue}
      placeholder="Placeholder"
      aria-label="Input"
      style={inputStyles}
    />
  )
}
