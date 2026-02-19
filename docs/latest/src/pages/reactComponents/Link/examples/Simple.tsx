import { Link, Text } from '@nectary/react'
import type { FC } from 'react'

export const SimpleExample: FC = () => (
  <Text type="m">
    <Text type="m" inline>Here is </Text>
    <Link
      text="link"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      aria-label="Link"
    />
  </Text>
)
