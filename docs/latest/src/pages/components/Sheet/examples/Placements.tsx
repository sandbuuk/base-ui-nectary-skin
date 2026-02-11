import '@nectary/components/button'
import '@nectary/components/sheet'
import '@nectary/components/sheet-title'
import '@nectary/components/text'
import '@nectary/components/icon'
import { type FC, useState } from 'react'
import type { TSinchSheetPlacement } from '@nectary/components/sheet'

export const PlacementsExample: FC = () => {
  const [isSheetOpen, setSheetOpen] = useState(false)
  const [placement, setPlacement] = useState<TSinchSheetPlacement>('right')

  const openSheet = (newPlacement: TSinchSheetPlacement) => {
    setPlacement(newPlacement)
    setSheetOpen(true)
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <sinch-button
          type="secondary"
          text="Left"
          aria-label="Open sheet from left"
          on-click={() => openSheet('left')}
        />
        <sinch-button
          type="secondary"
          text="Right"
          aria-label="Open sheet from right"
          on-click={() => openSheet('right')}
        />
        <sinch-button
          type="secondary"
          text="Top"
          aria-label="Open sheet from top"
          on-click={() => openSheet('top')}
        />
        <sinch-button
          type="secondary"
          text="Bottom"
          aria-label="Open sheet from bottom"
          on-click={() => openSheet('bottom')}
        />
      </div>
      <sinch-sheet
        open={isSheetOpen}
        placement={placement}
        overlay="modal"
        on-close={() => setSheetOpen(false)}
        /** The key is added for demo purposes, do not copy it into your project. */
        key={placement}
      >
        <sinch-sheet-title
          slot="title"
          title={`Sheet from ${placement}`}
        >
          <sinch-icon icons-version="2" name="fa-location-arrow" slot="icon"/>
        </sinch-sheet-title>
        <div slot="content">
          <sinch-text type="m">
            This sheet is sliding in from the <strong>{placement}</strong> edge of the screen.
          </sinch-text>
          <br/>
          <sinch-text type="m">
            Try opening sheets from different placements to see how they behave.
            Left and right placements are constrained by max-width, while top and
            bottom placements are constrained by max-height.
          </sinch-text>
        </div>
        <sinch-button
          slot="footer"
          text="Close"
          aria-label="Close"
          type="primary"
          on-click={() => setSheetOpen(false)}
        />
      </sinch-sheet>
    </>
  )
}
