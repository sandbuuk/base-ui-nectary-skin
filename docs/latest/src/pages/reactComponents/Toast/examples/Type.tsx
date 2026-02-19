import { Toast } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

export const TypeExample: FC = () => (
  <div style={wrapperStyle}>
    <Toast type="info" text="Info"/>
    <Toast type="warn" text="Warning"/>
    <Toast type="error" text="Error"/>
    <Toast type="success" text="Success"/>
  </div>
)
