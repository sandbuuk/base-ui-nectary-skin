import { Button } from '@nectary/react'
import type { FC } from 'react'

export const DisabledExample: FC = () => (
  <Button
    variant="primary"
    disabled
    onClick={() => console.log('click')}
  >
    Click
  </Button>
)
