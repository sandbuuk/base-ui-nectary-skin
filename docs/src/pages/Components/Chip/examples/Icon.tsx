import { colorNameValues } from '@sinch-engage/nectary/utils/colors'
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

export const IconExample: FC = () => (
  <div style={wrapperStyles}>
    {
      colorNameValues.map((colorName) => (
        <sinch-chip
          key={colorName}
          color={colorName}
          text={colorName.length > 0 ? colorName : 'default'}
          aria-label="Chip"
          on-click={() => console.log('click')}
        >
          <sinch-icon-mood slot="icon"/>
        </sinch-chip>
      ))
    }
  </div>
)
