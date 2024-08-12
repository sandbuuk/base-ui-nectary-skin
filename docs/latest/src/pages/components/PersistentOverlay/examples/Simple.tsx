import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/persistent-overlay'
import '@nectary/components/text'
import '@nectary/assets/icons/fa-face-smile-plus'

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
      <sinch-button
        type="cta-primary"
        text="Open Dialog"
        aria-label="Open Dialog"
        on-click={() => setDialogOpen(true)}
      />
      <sinch-persistent-overlay
        open={isDialogOpen}
        caption="Dialog Caption"
        aria-label="Dialog"
        on-visibility-altered={forceRemount}
      >
        <sinch-icon-fa-face-smile-plus slot="icon"/>
        <div slot="content">
          <sinch-text type="m">
            The only way of closing this overlay is in a controlled manner using the defined button.
          </sinch-text>
          <sinch-text type="m">
            Any attempt to alter the html to remove it will remount it.
          </sinch-text>
        </div>
        <sinch-button
          slot="buttons"
          text="Close"
          aria-label="Cancel"
          type="secondary"
          on-click={() => setDialogOpen(false)}
        />
      </sinch-persistent-overlay>
    </>
  )
}
