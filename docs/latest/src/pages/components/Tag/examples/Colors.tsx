import type { CSSProperties, FC } from 'react'
import '@nectary/components/tag'
import '@nectary/components/title'

const rowsWrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

const itemWrapperStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-gray'] as const
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-gray'] as const
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'gray'] as const

export const ColorsExample: FC = () => (
  <div style={rowsWrapperStyles}>
    <sinch-title type="s" level="4" text="Light colors"/>
    <div style={itemWrapperStyles}>
      {
        lightColors.map((name) => (
          <sinch-tag key={name} color={name} text={name}/>
        ))
      }
    </div>
    <sinch-title type="s" level="4" text="Vibrant colors"/>
    <div style={itemWrapperStyles}>
      {
        vibrantColors.map((name) => (
          <sinch-tag key={name} color={name} text={name}/>
        ))
      }
    </div>
    <sinch-title type="s" level="4" text="Dark colors"/>
    <div style={itemWrapperStyles}>
      {
        darkColors.map((name) => (
          <sinch-tag key={name} color={name} text={name}/>
        ))
      }
    </div>
  </div>
)
