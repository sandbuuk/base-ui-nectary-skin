import { Checkbox } from '@nectary/react'
import type { FC } from 'react'

export const DisabledExample: FC = () => {
  return (
    <Checkbox
      text="Label"
      aria-label="Label"
      disabled
    />
  )
}
