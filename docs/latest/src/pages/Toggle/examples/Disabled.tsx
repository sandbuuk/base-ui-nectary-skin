import type { FC } from 'react'
import '@nectary/components/toggle'

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
