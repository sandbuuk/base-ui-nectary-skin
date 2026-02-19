import { Radio, RadioOption } from '@nectary/react'
import { type FC, useState } from 'react'

export const SimpleExample: FC = () => {
  const [value, setValue] = useState('1')

  return (
    <Radio value={value} onChange={setValue} aria-label="Radio">
      <RadioOption value="1" text="Option 1"/>
      <RadioOption value="2" text="Option 2"/>
      <RadioOption value="3" text="Option 3"/>
    </Radio>
  )
}
