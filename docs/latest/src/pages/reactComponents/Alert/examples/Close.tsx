import { Alert, Button, Icon } from '@nectary/react'
import type { FC } from 'react'

export const CloseExample: FC = () => (
  <Alert
    type="info"
    text="Informative text"
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
