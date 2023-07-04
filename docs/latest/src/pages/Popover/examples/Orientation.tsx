import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/title'
import '@sinch-engage/nectary/text'

const contentStyles: CSSProperties = {
  width: 300,
  padding: 16,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

export const OrientationExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <sinch-popover
      aria-label="Popover"
      orientation="top-right"
      modal
      open={isOpen}
      on-close={onClose}
    >
      <sinch-button
        slot="target"
        text="Open popover"
        aria-label="Open popover"
        type="cta-secondary"
        on-click={onOpen}
      />
      <div slot="content" style={contentStyles}>
        <sinch-title text="Hi!" type="s" level="3"/>
        <sinch-text type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</sinch-text>
        <sinch-button
          text="Got it"
          aria-label="Close popover"
          type="cta-secondary"
          size="s"
          on-click={onClose}
        />
      </div>
    </sinch-popover>
  )
}
