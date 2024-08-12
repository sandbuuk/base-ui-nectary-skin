import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/progress'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-xmark'

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
      on-click={() => { }}
    >
      <sinch-icon-fa-xmark slot="icon"/>
    </sinch-button>
    <sinch-progress
      slot="content"
      value={30}
      aria-label="Uploading progress"
      detailed
    />
  </sinch-file-status>
)
