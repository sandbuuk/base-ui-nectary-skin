import { Button, Icon } from '@nectary/react'
import type { FC } from 'react'

export const RightIconExample: FC = () => (
  <Button
    variant="primary"
    rightIcon={<Icon name="fa-arrow-up-right-from-square" iconsVersion="2" size="sm"/>}
    onClick={() => console.log('click')}
  >
    Click
  </Button>
)
