import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/delete-outline'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 300,
}

export const SuccessExample: FC = () => (
  <div style={wrapperStyle}>
    <sinch-file-status type="success" filename="image.png">
      <sinch-icon-button
        slot="action"
        aria-label="Delete file"
        size="s"
        on-click={() => {}}
      >
        <sinch-icon-delete-outline slot="icon"/>
      </sinch-icon-button>
    </sinch-file-status>
  </div>
)
