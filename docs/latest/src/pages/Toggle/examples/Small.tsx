import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/toggle'

export const SmallExample: FC = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <sinch-toggle
      text="Toggle"
      aria-label="Toggle"
      small
      checked={isChecked}
      on-change={(e) => setChecked(e.detail)}
    />
  )
}
