import type { CSSProperties, FC } from 'react'
import '@nectary/components/tag'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}

export const EllipsisExample: FC = () => (
  <div style={wrapperStyles}>
    <div style={{ width: 100 }}>
      <sinch-tag
        color="info"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    <div style={{ width: 100 }}>
      <sinch-tag
        color="info"
        ellipsis
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  </div>
)
