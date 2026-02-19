import { Button, Icon, Sheet, SheetTitle, Text } from '@nectary/react'
import { useState } from 'react'
import type { SheetAnimationDetail } from '@nectary/react'
import type { FC } from 'react'

export const PushOverlayExample: FC = () => {
  const [isSheetOpen, setSheetOpen] = useState(false)

  const handleAnimationStart = (detail: SheetAnimationDetail) => {
    if (detail.action === 'expand') {
      document.querySelector('#app')?.animate([
        { marginRight: 0 },
        { marginRight: `${detail.width}px` },
      ], {
        duration: parseInt(detail.duration, 10),
        easing: detail.easing,
        fill: 'forwards',
      })
    } else {
      document.querySelector('#app')?.animate([
        { marginRight: `${detail.width}px` },
        { marginRight: 0 },
      ], {
        duration: parseInt(detail.duration, 10),
        easing: detail.easing,
        fill: 'forwards',
      })
    }
  }

  return (
    <div>
      <Button
        variant="cta-primary"
        aria-label="Push Sheet"
        onClick={() => setSheetOpen(true)}
      >
        Push Sheet
      </Button>
      <Sheet
        open={isSheetOpen}
        placement="right"
        overlay="push"
        onClose={() => setSheetOpen(false)}
        onSheetAnimationStart={handleAnimationStart}
        title={(
          <SheetTitle
            title="Settings"
            icon={<Icon name="fa-gear" iconsVersion="2"/>}
            onClose={() => setSheetOpen(false)}
          />
        )}
        footer={(
          <>
            <Button
              variant="secondary"
              aria-label="Cancel"
              onClick={() => setSheetOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              aria-label="Save Changes"
              onClick={() => setSheetOpen(false)}
            >
              Save Changes
            </Button>
          </>
        )}
      >
        <Text type="m" style={{ display: 'block', marginBottom: 16 }}>
          This sheet uses <code>overlay="push"</code> mode. Notice how the main
          content area smoothly transitions to the left as the sheet opens.
        </Text>
      </Sheet>
    </div>
  )
}
