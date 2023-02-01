import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/text'

const textStyles: CSSProperties = {
  width: 120,
}

export const EllipsisExample: FC = () => {
  return (
    <sinch-title
      style={textStyles}
      type="m"
      level="2"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      ellipsis
    />
  )
}
