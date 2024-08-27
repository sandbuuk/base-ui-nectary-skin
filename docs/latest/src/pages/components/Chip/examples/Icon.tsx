import type { CSSProperties, FC } from 'react'
import '@nectary/components/chip'
import '@nectary/components/icon'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['info', 'success', 'warning', 'danger']

export const IconExample: FC = () => (
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
          <sinch-icon icons-version="2" name="fa-face-laugh" slot="icon"/>
        </sinch-chip>
      ))
    }
  </div>
)
