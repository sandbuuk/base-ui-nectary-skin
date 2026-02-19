import { CodeTag, Text } from '@nectary/react'
import type { FC } from 'react'

export const CodeExample: FC = () => (
  <Text type="m">
    Provide the <CodeTag text="<Component/>"/> with the <CodeTag text="value"/> property
  </Text>
)
