import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/progress'

const style: CSSProperties = {
  width: 300,
}

export const ProgressExample: FC = () => (
  <sinch-file-status
    type="progress"
    filename="image.png"
    style={style}
  >
    <sinch-icon-button
      slot="action"
      aria-label="Cancel file uploading"
      small
      on-click={() => {}}
    >
      <sinch-icon-close slot="icon"/>
    </sinch-icon-button>
    <sinch-progress
      slot="content"
      value={30}
      aria-label="Uploading progress"
      detailed
    />
  </sinch-file-status>
)
