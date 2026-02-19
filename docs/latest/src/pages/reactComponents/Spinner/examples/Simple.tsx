import { Spinner } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
}

export const SimpleExample: FC = () => (
  <div style={wrapperStyles}>
    <Spinner size="l"/>
    <Spinner size="m"/>
    <Spinner size="s"/>
  </div>
)
