import { Button } from '@nectary/react'
import type { FC } from 'react'

export const SpinnerExample: FC = () => (
  <Button
    variant="primary"
    loading
    disabled
    onClick={() => console.log('click')}
  >
    Pending
  </Button>
)
