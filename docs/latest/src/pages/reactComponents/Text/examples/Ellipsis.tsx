import { Text } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const textStyles: CSSProperties = {
  width: 100,
}

export const EllipsisExample: FC = () => (
  <Text style={textStyles} type="m" ellipsis>
    Lorem ipsum dolor sit amet consectetur adipisicing elit
  </Text>
)
