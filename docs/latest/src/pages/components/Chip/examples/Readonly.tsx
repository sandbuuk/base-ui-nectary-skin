import type { CSSProperties, FC } from 'react'
import '@nectary/components/chip'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

export const ReadonlyExample: FC = () => (
  <div style={wrapperStyles}>
    <sinch-chip
      text="Readonly chip"
      color="light-blue"
      readonly
    />
  </div>
)
