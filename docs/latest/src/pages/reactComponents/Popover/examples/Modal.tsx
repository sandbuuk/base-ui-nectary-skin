import { Button, Popover, Text, Title } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const contentStyles: CSSProperties = {
  width: 300,
  padding: 16,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

export const ModalExample: FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Popover
      aria-label="Popover"
      modal
      open={isOpen}
      orientation="bottom-right"
      onClose={() => setOpen(false)}
      content={(
        <div style={contentStyles}>
          <Title type="s" level="3">Hi!</Title>
          <Text type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <Button
            variant="cta-secondary"
            aria-label="Close popover"
            size="s"
            onClick={() => setOpen(false)}
          >
            Got it
          </Button>
        </div>
      )}
    >
      <Button
        variant="cta-secondary"
        aria-label="Open popover"
        onClick={() => setOpen(true)}
      >
        Open popover
      </Button>
    </Popover>
  )
}
