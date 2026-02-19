import { Button, Icon, Toast } from '@nectary/react'
import type { FC } from 'react'

export const ActionExample: FC = () => (
  <Toast
    type="info"
    text="Info"
    action={(
      <Button
        variant="cta-secondary"
        size="s"
        aria-label="Action button"
        onClick={() => console.log('action')}
      >
        Action
      </Button>
    )}
    close={(
      <Button
        aria-label="Close"
        size="s"
        icon={<Icon name="fa-xmark" iconsVersion="2" size="sm"/>}
        onClick={() => console.log('close')}
      />
    )}
  />
)
