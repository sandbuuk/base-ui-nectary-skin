import { Chip, Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['info', 'success', 'warning', 'danger'] as const

export const IconExample: FC = () => (
  <div style={wrapperStyles}>
    {
      systemColors.map((name) => (
        <Chip
          key={name}
          color={name}
          text={name}
          icon={<Icon iconsVersion="2" name="fa-face-laugh"/>}
          onClick={() => console.log('click')}
        />
      ))
    }
  </div>
)
