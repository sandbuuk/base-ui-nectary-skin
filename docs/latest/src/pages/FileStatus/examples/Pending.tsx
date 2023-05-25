import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'

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
      <sinch-icon slot="icon" name="close"/>
    </sinch-icon-button>
  </sinch-file-status>
)
