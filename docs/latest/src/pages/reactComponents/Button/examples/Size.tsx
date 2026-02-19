import { Button } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <Button variant="primary" size="l">
      Button
    </Button>
    <Button variant="primary" size="m">
      Button
    </Button>
    <Button variant="primary" size="s">
      Button
    </Button>
    <Button variant="primary" size="xs">
      Button
    </Button>
  </div>
)
