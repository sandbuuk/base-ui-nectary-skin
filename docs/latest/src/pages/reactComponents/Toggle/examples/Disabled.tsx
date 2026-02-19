import { Toggle } from '@nectary/react'
import type { FC } from 'react'

export const DisabledExample: FC = () => {
  return (
    <Toggle
      text="Toggle"
      aria-label="Toggle"
      disabled
      checked
    />
  )
}
