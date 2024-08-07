import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/tile-control'
import '@nectary/components/tile-control-option'
import '@nectary/assets/icons/fa-message'
import '@nectary/assets/icons/fa-align-left'
import '@nectary/assets/icons/fa-t'
import '@nectary/assets/icons/fa-qrcode'
import '@nectary/assets/icons/fa-square-check'
import '@nectary/assets/icons/ai'
import '@nectary/assets/icons/fa-house-heart'
import '@nectary/assets/icons-channel/whatsapp'
import '@nectary/assets/icons-branded/contact'

export const CompositionExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <sinch-tile-control
      aria-label="Tile Control"
      value={value}
      cols={3}
      on-change={(e) => setValue(e.detail)}
    >
      <sinch-tile-control-option value="0" text="Message" aria-label="Message">
        <sinch-icon-fa-message slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="1" text="Title" aria-label="Title">
        <sinch-icon-fa-t slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="2" disabled text="Text" aria-label="Text">
        <sinch-icon-fa-align-left slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="3" text="QR Code" aria-label="qr code">
        <sinch-icon-fa-qrcode slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="4" text="Terms" aria-label="terms">
        <sinch-icon-fa-square-check slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="5" text="Button" aria-label="button">
        <sinch-icon-ai slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="6" text="Mobile App" aria-label="mobile app">
        <sinch-icon-fa-house-heart slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="7" text="Click to call" aria-label="click to call">
        <sinch-icon-channel-whatsapp slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="8" text="Separator" aria-label="separator">
        <sinch-icon-branded-contact slot="icon"/>
      </sinch-tile-control-option>
    </sinch-tile-control>
  )
}
