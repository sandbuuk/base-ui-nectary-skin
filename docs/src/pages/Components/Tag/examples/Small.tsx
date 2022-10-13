import {
  lightColorNames,
  darkColorNames,
  vibrantColorNames,
  skinToneColorNames,
} from '@sinch-engage/nectary/utils/colors'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/tag'
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
  ...skinToneColorNames.split(','),
]

export const SmallExample: FC = () => (
  <div style={wrapperStyles}>
    {
      allColorNames.map((colorName) => (
        <sinch-tag
          key={colorName}
          color={colorName}
          text={colorName.length > 0 ? colorName : 'default'}
          small
        />
      ))
    }
  </div>
)
