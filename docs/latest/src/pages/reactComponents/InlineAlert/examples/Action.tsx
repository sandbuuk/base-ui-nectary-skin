import { Button, Icon, InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const ActionExample: FC = () => (
  <InlineAlert
    type="error"
    caption="Alert"
    text="Error text"
    action={(
      <Button
        variant="cta-secondary"
        size="s"
        aria-label="Action button"
        onClick={() => console.log('action')}
      >
        Click
      </Button>
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
