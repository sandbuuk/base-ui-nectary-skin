import { Card, CardTitle, Text } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => (
  <Card
    title={<CardTitle text="Card Title"/>}
    content={(
      <Text type="m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </Text>
    )}
  />
)
