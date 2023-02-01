import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/close'

const style: CSSProperties = {
  width: 300,
}

export const PendingExample: FC = () => (
  <sinch-file-status
    type="pending"
    filename="image.png"
    style={style}
  >
    <sinch-icon-button
      slot="action"
      aria-label="Remove file"
      size="s"
      on-click={() => {}}
    >
      <sinch-icon-close slot="icon"/>
    </sinch-icon-button>
  </sinch-file-status>
)
