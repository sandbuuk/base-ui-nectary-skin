import { Button, Tooltip } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 16,
}

export const TextAlignExample: FC = () => {
  return (
    <div style={wrapperStyles}>
      <Tooltip textAlign="left" text="Left Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nulla eget nisl pulvinar convallis. Nam quis enim eget dolor pharetra ultrices at ut tortor.">
        <Button variant="cta-secondary" size="s">
          Left
        </Button>
      </Tooltip>
      <Tooltip textAlign="center" text="Center Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nulla eget nisl pulvinar convallis. Nam quis enim eget dolor pharetra ultrices at ut tortor.">
        <Button variant="cta-secondary" size="s">
          Center
        </Button>
      </Tooltip>
      <Tooltip textAlign="right" text="Right Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non nulla eget nisl pulvinar convallis. Nam quis enim eget dolor pharetra ultrices at ut tortor.">
        <Button variant="cta-secondary" size="s">
          Right
        </Button>
      </Tooltip>
    </div>
  )
}
