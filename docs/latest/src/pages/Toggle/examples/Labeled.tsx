import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/toggle'

export const LabeledExample: FC = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <sinch-toggle
      text="Toggle"
      aria-label="Toggle"
      labeled
      checked={isChecked}
      on-change={(e) => setChecked(e.detail)}
    />
  )
}
