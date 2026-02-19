import { Checkbox } from '@nectary/react'
import { type FC, useState } from 'react'

export const InvalidExample: FC = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Checkbox
      text="Label"
      aria-label="Label"
      invalid
      checked={isChecked}
      onChange={setChecked}
    />
  )
}
