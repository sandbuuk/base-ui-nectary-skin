import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/components/checkbox'
import '@nectary/components/dialog'
import '@nectary/components/text'
import '@nectary/components/icon'

export const SimpleExample: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <sinch-button
        type="cta-primary"
        text="Open Dialog"
        aria-label="Open Dialog"
        on-click={() => setDialogOpen(true)}
      />
      <sinch-dialog
        open={isDialogOpen}
        caption="Dialog Caption"
        aria-label="Dialog"
        close-aria-label="Close dialog"
        on-close={() => setDialogOpen(false)}
      >
        <sinch-icon slot="icon" name="add_reaction"/>
        <div slot="content">
          <sinch-text type="m">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</sinch-text>
        </div>
        <sinch-checkbox
          slot="buttons"
          text="Do not display this message again"
          aria-label="Dont show again"
        />
        <sinch-button
          slot="buttons"
          text="Cancel"
          aria-label="Cancel"
          type="secondary"
        />
        <sinch-button
          slot="buttons"
          text="Ok"
          aria-label="Ok"
          type="primary"
        />
      </sinch-dialog>
    </>
  )
}
