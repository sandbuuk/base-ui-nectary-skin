import { Button, Tooltip } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const TypeExample: FC = () => {
  return (
    <div style={wrapperStyles}>
      <Tooltip type="slow" text="Tooltip">
        <Button variant="cta-secondary" size="s">
          Slow tooltip
        </Button>
      </Tooltip>
      <Tooltip type="fast" text="Tooltip">
        <Button variant="cta-secondary" size="s">
          Fast tooltip
        </Button>
      </Tooltip>
    </div>
  )
}
