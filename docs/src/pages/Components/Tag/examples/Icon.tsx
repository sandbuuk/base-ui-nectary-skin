import { colorNameValues } from '@sinch-engage/nectary/utils/colors'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/tag'
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
        <sinch-tag
          key={colorName}
          color={colorName}
          text={colorName.length > 0 ? colorName : 'default'}
        >
          <sinch-icon-mood slot="icon"/>
        </sinch-tag>
      ))
    }
  </div>
)
