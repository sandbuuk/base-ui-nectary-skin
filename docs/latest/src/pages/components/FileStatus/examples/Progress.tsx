import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/icon'
import '@nectary/components/progress'
import '@nectary/components/button'

const style: CSSProperties = {
  width: 300,
}

export const ProgressExample: FC = () => (
  <sinch-file-status
    type="progress"
    filename="image.png"
    style={style}
  >
    <sinch-button
      slot="action"
      aria-label="Cancel file uploading"
      size="s"
      on-click={() => {}}
    >
      <sinch-icon slot="icon" name="close"/>
    </sinch-button>
    <sinch-progress
      slot="content"
      value={30}
      aria-label="Uploading progress"
      detailed
    />
  </sinch-file-status>
)
