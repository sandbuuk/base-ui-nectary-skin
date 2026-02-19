import { Avatar, Badge, Button, Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
}

export const ModeExample: FC = () => (
  <div style={wrapperStyles}>
    <Badge text="9" size="l" mode="circle">
      <Avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
    </Badge>
    <Button
      aria-label="Notifications"
      icon={(
        <Badge text="9" size="m" mode="square">
          <Icon name="bell" iconsVersion="2"/>
        </Badge>
      )}
    />
    <Badge text="9" size="l" mode="square">
      <Button
        variant="cta-secondary"
        aria-label="Click"
        onClick={() => console.log('click')}
      >
        Click
      </Button>
    </Badge>
  </div>
)
