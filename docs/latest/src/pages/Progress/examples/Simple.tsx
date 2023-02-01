import type { FC } from 'react'
import '@sinch-engage/nectary/progress'

export const SimpleExample: FC = () => {
  return (
    <sinch-progress
      value={73}
      aria-label="Progress"
    />
  )
}
