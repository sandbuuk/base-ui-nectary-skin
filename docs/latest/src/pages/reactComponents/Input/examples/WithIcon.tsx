import { Icon, Input } from '@nectary/react'
import type { FC } from 'react'

export const WithIconExample: FC = () => (
  <Input
    placeholder="Placeholder"
    icon={<Icon name="fa-magnifying-glass" iconsVersion="2" size="sm"/>}
    aria-label="Input"
  />
)
