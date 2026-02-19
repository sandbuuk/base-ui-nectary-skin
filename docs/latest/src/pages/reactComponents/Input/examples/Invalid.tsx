import { Input } from '@nectary/react'
import type { FC } from 'react'

export const InvalidExample: FC = () => (
  <Input
    value="Invalid value"
    invalid
    aria-label="Invalid input"
  />
)
