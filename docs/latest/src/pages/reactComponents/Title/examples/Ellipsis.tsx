import { Title } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const titleStyles: CSSProperties = {
  width: 120,
}

export const EllipsisExample: FC = () => (
  <Title style={titleStyles} type="m" ellipsis>
    Lorem ipsum dolor sit amet consectetur adipisicing elit
  </Title>
)
