import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/close'
import '@sinch-engage/nectary-assets/icons/refresh'
import '@sinch-engage/nectary/text'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 300,
}

export const ErrorExample: FC = () => (
  <div style={wrapperStyle}>
    <sinch-file-status type="error" filename="image.png">
      <sinch-icon-button
        slot="action"
        aria-label="Remove file"
        size="s"
        on-click={() => {}}
      >
        <sinch-icon-close slot="icon"/>
      </sinch-icon-button>
      <sinch-text slot="content" type="m">Invalid file, try another one</sinch-text>
    </sinch-file-status>
    <sinch-file-status type="error" filename="image.png">
      <sinch-icon-button
        slot="action"
        aria-label="Try again"
        size="s"
        on-click={() => {}}
      >
        <sinch-icon-refresh slot="icon"/>
      </sinch-icon-button>
      <sinch-text slot="content" type="m">Error, try again</sinch-text>
    </sinch-file-status>
  </div>
)
