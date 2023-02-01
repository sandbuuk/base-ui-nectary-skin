import {
  lightColorNames,
  darkColorNames,
  vibrantColorNames,
} from '@sinch-engage/nectary/theme/colors'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/text'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const allColorNames: string[] = [
  ...lightColorNames.split(','),
  ...darkColorNames.split(','),
  ...vibrantColorNames.split(','),
]

export const SimpleExample: FC = () => (
  <div style={wrapperStyles}>
    {
      allColorNames.map((colorName) => (
        <sinch-chip
          key={colorName}
          color={colorName}
          text={colorName.length > 0 ? colorName : 'default'}
          aria-label="Chip"
          on-click={() => console.log('click')}
        />
      ))
    }
  </div>
)
