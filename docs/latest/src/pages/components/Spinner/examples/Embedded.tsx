import type { CSSProperties, FC } from 'react'
import '@nectary/components/spinner'
import '@nectary/components/button'
import '@nectary/components/input'

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
      <sinch-button slot="right" aria-label="button">
        <sinch-spinner slot="icon"/>
      </sinch-button>
    </sinch-input>
    <sinch-button type="secondary" aria-label="button">
      <sinch-spinner slot="icon"/>
    </sinch-button>
  </div>
)
