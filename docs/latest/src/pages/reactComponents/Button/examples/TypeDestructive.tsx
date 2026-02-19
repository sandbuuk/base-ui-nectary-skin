import { Button, Icon } from '@nectary/react'
import type { FC } from 'react'

export const TypeDestructiveExample: FC = () => (
  <Button
    variant="destructive"
    leftIcon={<Icon name="fa-arrow-up-right-from-square" iconsVersion="2" size="sm"/>}
    onClick={() => console.log('click')}
  >
    Click
  </Button>
)
