import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/checkbox'

export const IndeterminateExample: FC = () => {
  const [isChecked, setChecked] = useState(true)
  const onChange = (e: CustomEvent<boolean>) => setChecked(e.detail)

  return (
    <sinch-checkbox
      text="Label"
      aria-label="Checkbox"
      indeterminate
      checked={isChecked}
      on-change={onChange}
    />
  )
}
