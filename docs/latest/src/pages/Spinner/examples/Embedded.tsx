import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/spinner'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/input'

const rowStyles: CSSProperties = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
}

export const EmbeddedExample: FC = () => (
  <div style={rowStyles}>
    <sinch-button type="cta-primary" text="Loading" aria-label="Loading">
      <sinch-spinner slot="left-icon"/>
    </sinch-button>
    <sinch-input value="" placeholder="Input value" aria-label="Input">
      <sinch-icon-button slot="right" aria-label="button">
        <sinch-spinner slot="icon"/>
      </sinch-icon-button>
    </sinch-input>
    <sinch-icon-button type="secondary" aria-label="button">
      <sinch-spinner slot="icon"/>
    </sinch-icon-button>
  </div>
)
