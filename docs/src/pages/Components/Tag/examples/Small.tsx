import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/text'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}

const systemColors = ['celtic', 'olive', 'pumpkin', 'jasper']

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
