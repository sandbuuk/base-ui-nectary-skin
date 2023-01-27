import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/toast'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

export const TypeExample: FC = () => (
  <div style={wrapperStyle}>
    <sinch-toast type="info" text="Info"/>
    <sinch-toast type="warn" text="Warning"/>
    <sinch-toast type="error" text="Error"/>
    <sinch-toast type="success" text="Success"/>
  </div>
)
