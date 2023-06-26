import { useState } from 'react'
import type { TSinchInputClipboardEvent } from '@sinch-engage/nectary/input/types'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/field'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
  gap: 16,
}

export const MaskedExample: FC = () => {
  const [dateState, setDateState] = useState('')
  const [cardState, setCardState] = useState('')
  const [phoneState, setPhoneState] = useState('')
  const [pnState, setPNState] = useState('')
  const [customState, setCustomState] = useState('')
  const onPhonePaste = (e: TSinchInputClipboardEvent) => {
    const value = e.detail.value.replaceAll('-', '')

    if (value.length === 10 && value.startsWith('0')) {
      e.detail.replaceWith(value.substring(1))
    }
  }
  const onPNPaste = (e: TSinchInputClipboardEvent) => {
    const value = e.detail.value.replaceAll('-', '')

    if (value.length === 12) {
      e.detail.replaceWith(value.substring(2))
    }
  }

  return (
    <div style={wrapperStyle}>
      <sinch-field label="Date">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="00-00-0000"
          placeholder="dd/mm/yyyy"
          value={dateState}
          on-change={(e) => {
            console.log('DATE', e.detail)
            setDateState(e.detail)
          }}
        />
      </sinch-field>
      <sinch-field label="Card Number">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="0000-0000-0000-0000"
          value={cardState}
          on-change={(e) => setCardState(e.detail)}
        />
      </sinch-field>
      <sinch-field label="Phone Number">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="+46-00-000-00-00"
          value={phoneState}
          on-change={(e) => setPhoneState(e.detail)}
          on-paste={onPhonePaste}
        />
      </sinch-field>
      <sinch-field label="Personal Number">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="000000-0000"
          value={pnState}
          on-change={(e) => setPNState(e.detail)}
          on-paste={onPNPaste}
        />
      </sinch-field>
      <sinch-field label="Custom Token" optionalText="Letters only">
        <sinch-input
          slot="input"
          aria-label="Input"
          mask="AAAA-PRO-AA-M-AAAA"
          value={customState}
          on-change={(e) => setCustomState(e.detail)}
        />
      </sinch-field>
    </div>
  )
}
