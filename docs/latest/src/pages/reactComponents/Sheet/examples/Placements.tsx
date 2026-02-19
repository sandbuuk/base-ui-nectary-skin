import { Button, Icon, Sheet, SheetTitle, Text } from '@nectary/react'
import { useState } from 'react'
import type { SheetPlacement } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
}

export const PlacementsExample: FC = () => {
  const [isSheetOpen, setSheetOpen] = useState(false)
  const [placement, setPlacement] = useState<SheetPlacement>('right')

  const openSheet = (newPlacement: SheetPlacement) => {
    setPlacement(newPlacement)
    setSheetOpen(true)
  }

  return (
    <>
      <div style={wrapperStyles}>
        <Button
          variant="secondary"
          aria-label="Open sheet from left"
          onClick={() => openSheet('left')}
        >
          Left
        </Button>
        <Button
          variant="secondary"
          aria-label="Open sheet from right"
          onClick={() => openSheet('right')}
        >
          Right
        </Button>
        <Button
          variant="secondary"
          aria-label="Open sheet from top"
          onClick={() => openSheet('top')}
        >
          Top
        </Button>
        <Button
          variant="secondary"
          aria-label="Open sheet from bottom"
          onClick={() => openSheet('bottom')}
        >
          Bottom
        </Button>
      </div>
      <Sheet
        open={isSheetOpen}
        placement={placement}
        overlay="modal"
        onClose={() => setSheetOpen(false)}
        title={(
          <SheetTitle
            title={`Sheet from ${placement}`}
            icon={<Icon name="fa-location-arrow" iconsVersion="2"/>}
            onClose={() => setSheetOpen(false)}
          />
        )}
        footer={(
          <Button
            variant="primary"
            aria-label="Close"
            onClick={() => setSheetOpen(false)}
          >
            Close
          </Button>
        )}
      >
        <Text type="m">
          This sheet is sliding in from the <strong>{placement}</strong> edge of the screen.
        </Text>
        <br/>
        <Text type="m">
          Try opening sheets from different placements to see how they behave.
          Left and right placements are constrained by max-width, while top and
          bottom placements are constrained by max-height.
        </Text>
      </Sheet>
    </>
  )
}
