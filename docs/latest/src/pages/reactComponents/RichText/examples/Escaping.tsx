import { RichText } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const EscapingExample: FC = () => (
  <div style={wrapperStyle}>
    <RichText size="m" text={'This is \\_not italic\\_ but this is _italic_'}/>
    <RichText size="m" text={'This is \\*\\*not bold\\*\\* but this is **bold**'}/>
    <RichText size="m" text={'This is \\`not code\\` but this is `code`'}/>
  </div>
)
