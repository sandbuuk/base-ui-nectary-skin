import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/checkbox'

export const SimpleExample: FC = () => {
  const [isChecked, setChecked] = useState(false)
  const onChange = (e: CustomEvent<boolean>) => setChecked(e.detail)

  return (
    <sinch-checkbox
      text="Label"
      aria-label="Checkbox"
      checked={isChecked}
      on-change={onChange}
    />
  )
}
