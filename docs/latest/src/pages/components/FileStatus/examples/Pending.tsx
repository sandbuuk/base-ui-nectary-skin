import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/button'
import '@nectary/components/icon'

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
      on-click={() => { }}
    >
      <sinch-icon name="fa-xmark" slot="icon"/>
    </sinch-button>
  </sinch-file-status>
)
