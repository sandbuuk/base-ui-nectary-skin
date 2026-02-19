import { Link, Text } from '@nectary/react'
import type { FC } from 'react'

export const StandaloneExternalExample: FC = () => (
  <Text type="m">
    <Text type="m" inline>Here is </Text>
    <Link
      text="Standalone external link"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      aria-label="Link"
      standalone
      external
    />
  </Text>
)
