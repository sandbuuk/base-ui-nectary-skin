import '@nectary/components/button'
import '@nectary/components/sheet'
import '@nectary/components/sheet-title'
import '@nectary/components/text'
import '@nectary/components/icon'
import { type FC, useState } from 'react'
import type { TSinchSheetAnimationDetail } from '@nectary/components/sheet'

export const PushOverlayExample: FC = () => {
  const [isSheetOpen, setSheetOpen] = useState(false)

  const handleAnimationStart = (e: CustomEvent<TSinchSheetAnimationDetail>) => {
    if (e.detail.action === 'expand') {
      document.querySelector('#app')?.animate([
        { marginRight: 0 },
        { marginRight: `${e.detail.width}px` },
      ], {
        duration: parseInt(e.detail.duration, 10),
        easing: e.detail.easing,
        fill: 'forwards',
      })
    } else {
      document.querySelector('#app')?.animate([
        { marginRight: `${e.detail.width}px` },
        { marginRight: 0 },
      ], {
        duration: parseInt(e.detail.duration, 10),
        easing: e.detail.easing,
        fill: 'forwards',
      })
    }
  }

  return (
    <div>
      <sinch-button
        type="cta-primary"
        text="Push Sheet"
        aria-label="Push Sheet"
        on-click={() => setSheetOpen(true)}
      />

      <sinch-sheet
        open={isSheetOpen}
        placement="right"
        overlay="push"
        on-close={() => setSheetOpen(false)}
        on-animation-start={handleAnimationStart}
      >
        <sinch-sheet-title
          slot="title"
          title="Settings"
        >
          <sinch-icon icons-version="2" name="fa-gear" slot="icon"/>
        </sinch-sheet-title>
        <div slot="content">
          <sinch-text type="m" style={{ display: 'block', marginBottom: '16px' }}>
            This sheet uses <code>overlay="push"</code> mode. Notice how the main
            content area smoothly transitions to the left as the sheet opens.
          </sinch-text>
        </div>
        <sinch-button
          slot="footer"
          text="Cancel"
          aria-label="Cancel"
          type="secondary"
          on-click={() => setSheetOpen(false)}
        />
        <sinch-button
          slot="footer"
          text="Save Changes"
          aria-label="Save Changes"
          type="primary"
          on-click={() => setSheetOpen(false)}
        />
      </sinch-sheet>
    </div>
  )
}
