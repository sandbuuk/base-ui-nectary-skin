import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/icon-button'
import '@nectary/components/icon'
import '@nectary/assets/icons/refresh'
import '@nectary/components/text'

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
        <sinch-icon slot="icon" name="close"/>
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
