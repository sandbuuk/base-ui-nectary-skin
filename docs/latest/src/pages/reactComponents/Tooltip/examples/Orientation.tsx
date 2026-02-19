import { Button, Tooltip } from '@nectary/react'
import type { FC } from 'react'

export const OrientationExample: FC = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 16 }}>
      {(['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map((orientation) => (
        <Tooltip key={orientation} orientation={orientation} text="Tooltip">
          <Button
            variant="cta-secondary"
            size="s"
            onClick={() => {}}
          >
            {orientation}
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}
