import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/text'

const textStyles: CSSProperties = {
  width: 100,
}

export const EllipsisExample: FC = () => {
  return (
    <sinch-text style={textStyles} type="m" ellipsis>
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </sinch-text>
  )
}
