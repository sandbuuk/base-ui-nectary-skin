import { Button, Icon, InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const ActionMultipleExample: FC = () => (
  <InlineAlert
    type="warn"
    caption="Wait!"
    text="Are you sure that you want to leave without saving?"
    action={(
      <>
        <Button
          variant="cta-secondary"
          size="s"
          aria-label="Leave button"
          onClick={() => console.log('action')}
        >
          Leave
        </Button>
        <Button
          variant="subtle-secondary"
          size="s"
          aria-label="Cancel button"
          onClick={() => console.log('canceled')}
        >
          Cancel
        </Button>
      </>
    )}
    close={(
      <Button
        aria-label="Close alert"
        size="s"
        icon={<Icon name="fa-xmark" iconsVersion="2" size="sm"/>}
        onClick={() => console.log('close')}
      />
    )}
  />
)
