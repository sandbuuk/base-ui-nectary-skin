import type { CSSProperties, FC } from 'react'
import '@nectary/components/chip'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['info', 'success', 'warning', 'danger'] as const

export const SmallExample: FC = () => (
  <div style={wrapperStyles}>
    {
      systemColors.map((name) => (
        <sinch-chip
          key={name}
          color={name}
          text={name}
          small
          on-click={() => console.log('click')}
        />
      ))
    }
  </div>
)
