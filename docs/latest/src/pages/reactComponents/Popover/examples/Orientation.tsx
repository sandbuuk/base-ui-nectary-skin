import { Button, Popover, Text, Title } from '@nectary/react'
import { useState } from 'react'
import type { PopoverOrientation } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const contentStyles: CSSProperties = {
  width: 300,
  padding: 16,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

const orientationValues: PopoverOrientation[] = [
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

export const OrientationExample: FC = () => {
  const [orientationOpen, setOrientationOpen] = useState<PopoverOrientation | null>(null)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: 16 }}>
      {orientationValues.map((orientation) => (
        <Popover
          key={orientation}
          aria-label="Popover"
          orientation={orientation}
          modal
          open={orientationOpen === orientation}
          onClose={() => setOrientationOpen(null)}
          tip
          content={(
            <div style={contentStyles}>
              <Title type="s" level="3">Hi!</Title>
              <Text type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <Button
                variant="cta-secondary"
                aria-label="Close popover"
                size="s"
                onClick={() => setOrientationOpen(null)}
              >
                Got it
              </Button>
            </div>
          )}
        >
          <Button
            variant="cta-secondary"
            aria-label="Open popover"
            onClick={() => setOrientationOpen(orientation)}
          >
            {`Open popover (${orientation})`}
          </Button>
        </Popover>
      ))}
    </div>
  )
}
