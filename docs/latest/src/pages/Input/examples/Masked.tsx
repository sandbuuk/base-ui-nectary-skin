import { useState } from 'react'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/field'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
  gap: 16,
}

const monoStyle = {
  '--sinch-comp-input-font-input': 'var(--sinch-sys-font-body-monospace-m)',
} as CSSProperties

export const MaskedExample: FC = () => {
  const [dateState, setDateState] = useState('')
  const [cardState, setCardState] = useState('')
  const [phoneState, setPhoneState] = useState('')
  const [pnState, setPNState] = useState('')
  const [customState, setCustomState] = useState('')

  return (
    <div style={wrapperStyle}>
      <sinch-field label="Date" additionalText="DM Sans">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="00-00-0000"
          placeholder="dd/mm/yyyy"
          value={dateState}
          on-change={(e) => setDateState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Date" additionalText="DM Mono">
        <sinch-input
          style={monoStyle}
          slot="input"
          aria-label="Input"
          mask="00-00-0000"
          placeholder="dd/mm/yyyy"
          value={dateState}
          on-change={(e) => setDateState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Card Number" additionalText="DM Sans">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="0000-0000-0000-0000"
          value={cardState}
          on-change={(e) => setCardState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Card Number" additionalText="DM Mono">
        <sinch-input
          style={monoStyle}
          slot="input"
          aria-label="Input"
          mask="0000-0000-0000-0000"
          value={cardState}
          on-change={(e) => setCardState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Phone Number" additionalText="DM Sans">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="+46-00-000-00-00"
          value={phoneState}
          on-change={(e) => setPhoneState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Phone Number" additionalText="DM Mono">
        <sinch-input
          slot="input"
          style={monoStyle}
          aria-label="Input"
          mask="+46-00-000-00-00"
          value={phoneState}
          on-change={(e) => setPhoneState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Personal Number" additionalText="DM Sans">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="000000-0000"
          value={pnState}
          on-change={(e) => setPNState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Personal Number" additionalText="DM Mono">
        <sinch-input
          slot="input"
          style={monoStyle}
          aria-label="Input"
          mask="000000-0000"
          value={pnState}
          on-change={(e) => setPNState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Custom Token" additionalText="DM Sans" optionalText="Letters only">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="AAAA-PRO-AA-M-AAAA"
          value={customState}
          on-change={(e) => setCustomState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Custom Token" additionalText="DM Mono" optionalText="Letters only">
        <sinch-input
          slot="input"
          style={monoStyle}
          aria-label="Input"
          mask="AAAA-PRO-AA-M-AAAA"
          value={customState}
          on-change={(e) => setCustomState(e.detail)}
        />
      </sinch-field>
    </div>
  )
}
