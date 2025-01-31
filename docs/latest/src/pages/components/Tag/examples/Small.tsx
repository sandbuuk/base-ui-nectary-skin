import type { CSSProperties, FC } from 'react'
import '@nectary/components/tag'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['info', 'success', 'warning', 'danger'] as const

export const SmallExample: FC = () => (
  <div style={wrapperStyles}>
    {
      systemColors.map((colorName) => (
        <sinch-tag
          key={colorName}
          color={colorName}
          text={colorName}
          small
        />
      ))
    }
  </div>
)
