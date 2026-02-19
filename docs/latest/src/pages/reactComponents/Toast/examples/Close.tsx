import { Button, Icon, Toast } from '@nectary/react'
import type { FC } from 'react'

export const CloseExample: FC = () => (
  <Toast
    type="info"
    text="Info"
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
