import { Button, Icon, PersistentOverlay, Text } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isRemountTrigger, setRemountTrigger] = useState(false)

  const forceRemount = () => {
    setRemountTrigger(true)
    setTimeout(() => setRemountTrigger(false), 0)
  }

  if (isRemountTrigger) {
    return null
  }

  return (
    <>
      <Button
        variant="cta-primary"
        aria-label="Open Dialog"
        onClick={() => setDialogOpen(true)}
      >
        Open Dialog
      </Button>
      <PersistentOverlay
        open={isDialogOpen}
        caption="Dialog Caption"
        aria-label="Dialog"
        onVisibilityAltered={forceRemount}
        icon={<Icon iconsVersion="2" name="fa-face-smile-plus"/>}
        content={(
          <>
            <Text type="m">
              The only way of closing this overlay is in a controlled manner using the defined button.
            </Text>
            <Text type="m">
              Any attempt to alter the html to remove it will remount it.
            </Text>
          </>
        )}
        buttons={(
          <Button
            aria-label="Cancel"
            variant="secondary"
            onClick={() => setDialogOpen(false)}
          >
            Close
          </Button>
        )}
      />
    </>
  )
}
