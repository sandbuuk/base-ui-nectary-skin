import type { CSSProperties, FC } from 'react'
import '@nectary/components/chip'
import '@nectary/components/icon'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['celtic', 'olive', 'pumpkin', 'jasper']

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
          <sinch-icon slot="right-icon" name="add"/>
        </sinch-chip>
      ))
    }
  </div>
)
