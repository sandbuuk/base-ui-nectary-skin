import { Link, Text } from '@nectary/react'
import type { FC } from 'react'

export const ExternalExample: FC = () => (
  <Text type="m">
    <Text type="m" inline>Here is </Text>
    <Link
      text="external link"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      aria-label="Link"
      external
    />
  </Text>
)
