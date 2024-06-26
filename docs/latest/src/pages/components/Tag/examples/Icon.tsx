import type { CSSProperties, FC } from 'react'
import '@nectary/components/tag'
import '@nectary/assets/icons/mood'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['info', 'success', 'warning', 'danger']

export const IconExample: FC = () => (
  <div style={wrapperStyles}>
    {
      systemColors.map((colorName) => (
        <sinch-tag key={colorName} color={colorName} text={colorName}>
          <sinch-icon-mood slot="icon"/>
        </sinch-tag>
      ))
    }
  </div>
)
