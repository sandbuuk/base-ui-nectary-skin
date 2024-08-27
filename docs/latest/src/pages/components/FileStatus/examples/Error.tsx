import type { CSSProperties, FC } from 'react'
import '@nectary/components/file-status'
import '@nectary/components/text'
import '@nectary/components/button'
import '@nectary/components/icon'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: 300,
}

export const ErrorExample: FC = () => (
  <div style={wrapperStyle}>
    <sinch-file-status type="error" filename="image.png">
      <sinch-button
        slot="action"
        aria-label="Remove file"
        size="s"
        type="cta-secondary"
        on-click={() => { }}
      >
        <sinch-icon name="fa-xmark" slot="icon"/>
      </sinch-button>
      <sinch-text slot="content" type="m">Invalid file, try another one</sinch-text>
    </sinch-file-status>
    <sinch-file-status type="error" filename="image.png">
      <sinch-button
        slot="action"
        aria-label="Try again"
        size="s"
        type="cta-secondary"
        on-click={() => { }}
      >
        <sinch-icon name="fa-arrow-rotate-right" slot="icon"/>
      </sinch-button>
      <sinch-text slot="content" type="m">Error, try again</sinch-text>
    </sinch-file-status>
  </div>
)
