import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/button'
import '@nectary/assets/icons/delete-outline'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 300,
}

export const SuccessExample: FC = () => (
  <div style={wrapperStyle}>
    <sinch-file-status type="success" filename="image.png">
      <sinch-button
        slot="action"
        aria-label="Delete file"
        size="s"
        on-click={() => {}}
      >
        <sinch-icon-delete-outline slot="icon"/>
      </sinch-button>
    </sinch-file-status>
  </div>
)
