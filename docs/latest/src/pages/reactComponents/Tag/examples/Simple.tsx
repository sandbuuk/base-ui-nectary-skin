import { Tag } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-gray'] as const
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-gray'] as const
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'gray'] as const
const colors = [...lightColors, ...vibrantColors, ...darkColors]

export const SimpleExample: FC = () => (
  <div style={wrapperStyles}>
    {
      colors.map((colorName) => (
        <Tag
          key={colorName}
          color={colorName}
          text={colorName}
        />
      ))
    }
  </div>
)
