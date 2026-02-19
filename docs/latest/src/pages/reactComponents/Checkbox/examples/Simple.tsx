import { Checkbox } from '@nectary/react'
import { type FC, useState } from 'react'

export const SimpleExample: FC = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Checkbox
      text="Label"
      aria-label="Label"
      checked={isChecked}
      onChange={setChecked}
    />
  )
}
