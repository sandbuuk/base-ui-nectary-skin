import { Button, Icon, Sheet, SheetTitle, Text } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  const [isSheetOpen, setSheetOpen] = useState(false)

  return (
    <>
      <Button
        variant="cta-primary"
        aria-label="Open Sheet"
        onClick={() => setSheetOpen(true)}
      >
        Open Sheet
      </Button>
      <Sheet
        open={isSheetOpen}
        placement="right"
        overlay="modal"
        onClose={() => setSheetOpen(false)}
        title={(
          <SheetTitle
            title="Sheet Title"
            description="This is a description for the sheet."
            icon={<Icon name="fa-bars" iconsVersion="2"/>}
            onClose={() => setSheetOpen(false)}
            closeAriaLabel="Close Sheet"
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
              aria-label="Save"
              onClick={() => setSheetOpen(false)}
            >
              Save
            </Button>
          </>
        )}
      >
        <Text type="m">
          This is a simple sheet that slides in from the right side of the screen.
          You can close it by clicking the close button, clicking outside the sheet,
          or pressing the ESC key.
        </Text>
        <br/>
        <Text type="m">
          Sheets are perfect for displaying additional content, settings, or navigation
          options without navigating away from the current page.
        </Text>
      </Sheet>
    </>
  )
}
