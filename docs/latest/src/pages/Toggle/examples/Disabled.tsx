import type { FC } from 'react'
import '@sinch-engage/nectary/toggle'

export const DisabledExample: FC = () => {
  return (
    <sinch-toggle
      text="Toggle"
      aria-label="Toggle"
      disabled
      checked
    />
  )
}
