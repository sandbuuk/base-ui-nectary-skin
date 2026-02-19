import { Toggle } from '@nectary/react'
import { type FC, useState } from 'react'

export const SimpleExample: FC = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Toggle
      text="Toggle"
      aria-label="Toggle"
      checked={isChecked}
      onChange={setChecked}
    />
  )
}
