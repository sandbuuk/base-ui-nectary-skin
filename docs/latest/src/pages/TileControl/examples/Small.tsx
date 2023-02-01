import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/tile-control'
import '@sinch-engage/nectary/tile-control-option'
import '@sinch-engage/nectary-assets/icons/chat'
import '@sinch-engage/nectary-assets/icons/title'
import '@sinch-engage/nectary-assets/icons/format-align-left'
import '@sinch-engage/nectary-assets/icons/qr-code'
import '@sinch-engage/nectary-assets/icons/library-add-check'
import '@sinch-engage/nectary-assets/icons/smart-button'
import '@sinch-engage/nectary-assets/icons/add-to-home-screen'
import '@sinch-engage/nectary-assets/icons-channel/whatsapp'
import '@sinch-engage/nectary-assets/icons-branded/contact'

export const SmallExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <sinch-tile-control
      aria-label="Tile Control"
      value={value}
      cols={3}
      small
      on-change={(e) => setValue(e.detail)}
    >
      <sinch-tile-control-option value="0" text="Message" aria-label="Message">
        <sinch-icon-chat slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="1" text="Title" aria-label="Title">
        <sinch-icon-title slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="2" disabled text="Text" aria-label="Text">
        <sinch-icon-format-align-left slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="3" text="QR Code" aria-label="qr code">
        <sinch-icon-qr-code slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="4" text="Terms" aria-label="terms">
        <sinch-icon-library-add-check slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="5" text="Button" aria-label="button">
        <sinch-icon-smart-button slot="icon"/>
      </sinch-tile-control-option>
      <sinch-tile-control-option value="6" text="Mobile App" aria-label="mobile app">
        <sinch-icon-add-to-home-screen slot="icon"/>
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
