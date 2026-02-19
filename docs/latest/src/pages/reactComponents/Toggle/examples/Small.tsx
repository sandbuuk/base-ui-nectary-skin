import { Toggle } from '@nectary/react'
import { type FC, useState } from 'react'

export const SmallExample: FC = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Toggle
      text="Toggle"
      aria-label="Toggle"
      small
      checked={isChecked}
      onChange={setChecked}
    />
  )
}
