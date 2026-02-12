import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/sheet'
import '@nectary/components/sheet-title'
import '@nectary/components/text'
import '@nectary/components/icon'

export const SimpleExample: FC = () => {
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <>
      <sinch-button
        type="cta-primary"
        text="Open Sheet"
        aria-label="Open Sheet"
        on-click={() => setSheetOpen(true)}
      />
      <sinch-sheet
        open={isSheetOpen}
        placement="right"
        overlay="modal"
        on-close={(e) => {
          if (!e.cancelable) {
            return setSheetOpen(false)
          }

          setSheetOpen(false)
        }}
      >
        <sinch-sheet-title
          slot="title"
          title="Sheet Title"
          description="This is a description for the sheet."
          close-aria-label="Close Sheet"
        >
          <sinch-icon icons-version="2" name="fa-bars" slot="icon"/>
        </sinch-sheet-title>
        <div slot="content">
          <sinch-text type="m">
            This is a simple sheet that slides in from the right side of the screen.
            You can close it by clicking the close button, clicking outside the sheet,
            or pressing the ESC key.
          </sinch-text>
          <br/>
          <sinch-text type="m">
            Sheets are perfect for displaying additional content, settings, or navigation
            options without navigating away from the current page.
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
          text="Save"
          aria-label="Save"
          type="primary"
          on-click={() => setSheetOpen(false)}
        />
      </sinch-sheet>
    </>
  )
}
