import { orientationValues } from '@nectary/components/popover/utils'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/button'
import '@nectary/components/title'
import '@nectary/components/text'

const contentStyles: CSSProperties = {
  width: 300,
  padding: 16,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

export const OrientationExample: FC = () => {
  const [orientationOpen, setOrientationOpen] = useState<(typeof orientationValues)[number] | null>(null)
  const onOpen = (orientation: (typeof orientationValues)[number]) => setOrientationOpen(orientation)
  const onClose = () => setOrientationOpen(null)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: 16 }}>
      {orientationValues.map((orientation) => (
        <sinch-popover
          key={orientation}
          aria-label="Popover"
          orientation={orientation}
          modal
          open={orientationOpen === orientation}
          on-close={onClose}
          tip
        >
          <sinch-button
            slot="target"
            text={`Open popover (${orientation})`}
            aria-label="Open popover"
            type="cta-secondary"
            on-click={() => onOpen(orientation)}
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
      ))}
    </div>
  )
}
