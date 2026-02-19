import { Link, Text } from '@nectary/react'
import type { FC } from 'react'

export const HistoryExample: FC = () => (
  <Text type="m">
    <Text type="m" inline>Here is </Text>
    <Link
      text="use history link"
      href="/pushed-via-history"
      useHistory
      aria-label="Link"
    />
  </Text>
)
