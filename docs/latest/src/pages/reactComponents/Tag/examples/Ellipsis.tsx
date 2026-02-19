import { Tag } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

export const EllipsisExample: FC = () => (
  <div style={wrapperStyles}>
    <div style={{ width: 100 }}>
      <Tag
        color="info"
        ellipsis
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
    <div style={{ width: 100 }}>
      <Tag
        color="info"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  </div>
)
