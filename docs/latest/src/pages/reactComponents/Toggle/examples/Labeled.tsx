import { Toggle } from '@nectary/react'
import { type FC, useState } from 'react'

export const LabeledExample: FC = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Toggle
      text="Toggle"
      aria-label="Toggle"
      labeled
      checked={isChecked}
      onChange={setChecked}
    />
  )
}
