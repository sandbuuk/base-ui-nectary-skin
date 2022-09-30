import { colorNameValues } from '@sinch-engage/nectary/utils/colors'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/text'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

export const SmallExample: FC = () => (
  <div style={wrapperStyles}>
    {
      colorNameValues.map((colorName) => (
        <sinch-chip
          key={colorName}
          color={colorName}
          text={colorName.length > 0 ? colorName : 'default'}
          aria-label="Chip"
          small
          on-click={() => console.log('click')}
        />
      ))
    }
  </div>
)
