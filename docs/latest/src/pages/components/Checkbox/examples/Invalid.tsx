import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/checkbox'

export const InvalidExample: FC = () => {
  const [isChecked, setChecked] = useState(false)
  const onChange = (e: CustomEvent<boolean>) => setChecked(e.detail)

  return (
    <sinch-checkbox
      text="Label"
      aria-label="Label"
      invalid
      checked={isChecked}
      on-change={onChange}
    />
  )
}
