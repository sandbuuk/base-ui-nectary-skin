import { Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}

export const SizeExample: FC = () => (
  <div style={wrapperStyles}>
    <Icon name="circle-check" iconsVersion="2" size="xs"/>
    <Icon name="circle-check" iconsVersion="2" size="sm"/>
    <Icon name="circle-check" iconsVersion="2" size="md"/>
    <Icon name="circle-check" iconsVersion="2" size="lg"/>
    <Icon name="circle-check" iconsVersion="2" size="xl"/>
  </div>
)
