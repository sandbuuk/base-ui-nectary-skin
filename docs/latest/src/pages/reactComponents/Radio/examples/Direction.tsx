import { Radio, RadioOption } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'

const radioStyles: CSSProperties = {
  '--sinch-comp-radio-gap': '16px',
} as CSSProperties

export const DirectionExample: FC = () => {
  const [value, setValue] = useState('1')

  return (
    <Radio
      value={value}
      onChange={setValue}
      aria-label="Radio"
      direction="row"
      style={radioStyles}
    >
      <RadioOption value="1" text="Option 1"/>
      <RadioOption value="2" text="Option 2"/>
      <RadioOption value="3" text="Option 3"/>
    </Radio>
  )
}
