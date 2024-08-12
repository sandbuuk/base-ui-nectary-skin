import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-xmark'

const style: CSSProperties = {
  width: 300,
}

export const LoadingExample: FC = () => (
  <sinch-file-status
    type="loading"
    filename="image.png"
    style={style}
  >
    <sinch-button
      slot="action"
      aria-label="Cancel file uploading"
      size="s"
      type="cta-secondary"
      on-click={() => { }}
    >
      <sinch-icon-fa-xmark slot="icon"/>
    </sinch-button>
  </sinch-file-status>
)
