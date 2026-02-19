import { Card, CardTitle, Text } from '@nectary/react'
import type { FC } from 'react'

export const ClickableExample: FC = () => (
  <Card
    onClick={() => console.log('click')}
    aria-label="Click me"
    title={<CardTitle text="Click me"/>}
    content={(
      <Text type="m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </Text>
    )}
  />
)
