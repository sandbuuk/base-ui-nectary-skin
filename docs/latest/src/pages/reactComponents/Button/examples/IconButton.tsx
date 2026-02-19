import { Button, Icon } from '@nectary/react'
import type { FC } from 'react'

export const IconButtonExample: FC = () => (
  <Button
    variant="primary"
    icon={<Icon name="fa-arrow-up-right-from-square" iconsVersion="2" size="sm"/>}
    aria-label="Click"
    onClick={() => console.log('click')}
  />
)
