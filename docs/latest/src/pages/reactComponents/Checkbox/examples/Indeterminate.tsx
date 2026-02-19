import { Checkbox } from '@nectary/react'
import { type FC, useState } from 'react'

export const IndeterminateExample: FC = () => {
  const [isChecked, setChecked] = useState(true)

  return (
    <Checkbox
      text="Label"
      aria-label="Label"
      indeterminate
      checked={isChecked}
      onChange={setChecked}
    />
  )
}
