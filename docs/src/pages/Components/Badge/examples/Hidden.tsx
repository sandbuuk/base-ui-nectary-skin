import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/avatar'

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
      <sinch-button
        text="Toggle badge"
        aria-label="Toggle badge button"
        type="cta-secondary"
        size="s"
        on-click={onToggle}
      />
      <sinch-badge
        text="999+"
        size="l"
        mode="circle"
        hidden={isBadgeHidden}
      >
        <sinch-avatar src="https://i.pravatar.cc/300" size="l" alt="AB"/>
      </sinch-badge>
    </div>
  )
}
