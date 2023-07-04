import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/title'

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

const systemColors = ['celtic', 'olive', 'pumpkin', 'jasper']
const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']

export const ColorsExample: FC = () => (
  <div style={rowsWrapperStyles}>
    <sinch-title type="s" level="4" text="System colors"/>
    <div style={itemWrapperStyles}>
      {
        systemColors.map((name) => (
          <sinch-chip key={name} color={name} text={name} aria-label="Chip" on-click={() => console.log('click')}/>
        ))
      }
    </div>
    <sinch-title type="s" level="4" text="Light colors"/>
    <div style={itemWrapperStyles}>
      {
        lightColors.map((name) => (
          <sinch-chip key={name} color={name} text={name} aria-label="Chip" on-click={() => console.log('click')}/>
        ))
      }
    </div>
    <sinch-title type="s" level="4" text="Vibrant colors"/>
    <div style={itemWrapperStyles}>
      {
        vibrantColors.map((name) => (
          <sinch-chip key={name} color={name} text={name} aria-label="Chip" on-click={() => console.log('click')}/>
        ))
      }
    </div>
    <sinch-title type="s" level="4" text="Dark colors"/>
    <div style={itemWrapperStyles}>
      {
        darkColors.map((name) => (
          <sinch-chip key={name} color={name} text={name} aria-label="Chip" on-click={() => console.log('click')}/>
        ))
      }
    </div>
  </div>
)
