import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/icon'
import '@nectary/components/button'

const style: CSSProperties = {
  width: 300,
}

export const PendingExample: FC = () => (
  <sinch-file-status
    type="pending"
    filename="image.png"
    style={style}
  >
    <sinch-button
      slot="action"
      aria-label="Remove file"
      size="s"
      on-click={() => {}}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-button>
  </sinch-file-status>
)
