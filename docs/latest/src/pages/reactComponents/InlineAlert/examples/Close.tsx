import { Button, Icon, InlineAlert } from '@nectary/react'
import type { FC } from 'react'

export const CloseExample: FC = () => (
  <InlineAlert
    type="info"
    caption="Information"
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
