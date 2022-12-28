import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/icons/mood'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['celtic', 'olive', 'pumpkin', 'jasper']

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
          <sinch-icon-mood slot="icon"/>
        </sinch-chip>
      ))
    }
  </div>
)
