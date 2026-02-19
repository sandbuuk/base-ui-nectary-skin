import { CodeTag, Text } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const SizeExample: FC = () => (
  <div style={wrapperStyle}>
    <Text type="m">
      The <CodeTag text="font-size"/> value of <CodeTag text="CodeTag"/> is inherited
    </Text>
    <Text type="s">
      The <CodeTag text="font-size"/> value of <CodeTag text="CodeTag"/> is inherited
    </Text>
    <Text type="xs">
      The <CodeTag text="font-size"/> value of <CodeTag text="CodeTag"/> is inherited
    </Text>
    <Text type="xxs">
      The <CodeTag text="font-size"/> value of <CodeTag text="CodeTag"/> is inherited
    </Text>
  </div>
)
