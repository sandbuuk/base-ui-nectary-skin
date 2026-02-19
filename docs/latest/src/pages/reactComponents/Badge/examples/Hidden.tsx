import { Avatar, Badge, Button } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const HiddenExample: FC = () => {
  const [isBadgeHidden, setBadgeHidden] = useState(true)
  const onToggle = () => setBadgeHidden((isHidden) => !isHidden)

  return (
    <div style={wrapperStyles}>
      <Button
        variant="cta-secondary"
        size="s"
        aria-label="Toggle badge button"
        onClick={onToggle}
      >
        Toggle badge
      </Button>
      <Badge
        text="999+"
        size="l"
        mode="circle"
        hidden={isBadgeHidden}
      >
        <Avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
      </Badge>
    </div>
  )
}
