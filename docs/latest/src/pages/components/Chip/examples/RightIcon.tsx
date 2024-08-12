import type { CSSProperties, FC } from 'react'
import '@nectary/components/chip'
import '@nectary/assets/icons/fa-plus'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['info', 'success', 'warning', 'danger']

export const RightIconExample: FC = () => (
  <div style={wrapperStyles}>
    {
      systemColors.map((name) => (
        <sinch-chip
          key={name}
          color={name}
          text={name}
          aria-label="Chip"
          on-click={() => console.log('click')}
        >
          <sinch-icon-fa-plus slot="right-icon"/>
        </sinch-chip>
      ))
    }
  </div>
)
