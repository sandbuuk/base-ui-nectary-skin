import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'
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
      size="s"
      on-click={() => {}}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-icon-button>
    <sinch-progress
      slot="content"
      value={30}
      aria-label="Uploading progress"
      detailed
    />
  </sinch-file-status>
)
