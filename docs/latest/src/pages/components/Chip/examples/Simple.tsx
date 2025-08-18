
import type { CSSProperties, FC } from 'react'
import '@nectary/components/chip'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const lightColorNames = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-gray'] as const
const darkColorNames = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-gray'] as const
const vibrantColorNames = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'gray'] as const

const allColorNames = [
  ...lightColorNames,
  ...darkColorNames,
  ...vibrantColorNames,
]

export const SimpleExample: FC = () => (
  <div style={wrapperStyles}>
    {
      allColorNames.map((colorName) => (
        <sinch-chip
          key={colorName}
          color={colorName}
          text={colorName.length > 0 ? colorName : 'default'}
          on-click={() => console.log('click')}
        />
      ))
    }
  </div>
)
