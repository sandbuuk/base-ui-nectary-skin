import { Button, Tooltip } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const ControlledExample: FC = () => {
  return (
    <div style={wrapperStyles}>
      <Tooltip isOpen text="I am a tooltip that is always opened">
        <Button variant="cta-secondary" size="s">
          Always open
        </Button>
      </Tooltip>
      <Tooltip isOpen={false} text="Tooltip">
        <Button variant="cta-secondary" size="s">
          Always closed
        </Button>
      </Tooltip>
    </div>
  )
}
