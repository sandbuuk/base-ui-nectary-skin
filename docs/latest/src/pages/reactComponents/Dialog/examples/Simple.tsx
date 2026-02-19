import { Button, Checkbox, Dialog, Icon, Text } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Button
        variant="cta-primary"
        aria-label="Open Dialog"
        onClick={() => setDialogOpen(true)}
      >
        Open Dialog
      </Button>
      <Dialog
        open={isDialogOpen}
        caption="Dialog Caption"
        aria-label="Dialog"
        closeAriaLabel="Close dialog"
        onClose={() => setDialogOpen(false)}
        icon={<Icon name="fa-face-smile-plus" iconsVersion="2"/>}
        buttons={(
          <>
            <Checkbox text="Do not display this message again"/>
            <Button
              variant="secondary"
              aria-label="Cancel"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              aria-label="Ok"
              onClick={() => setDialogOpen(false)}
            >
              Ok
            </Button>
          </>
        )}
      >
        <Text type="m">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
      </Dialog>
    </>
  )
}
