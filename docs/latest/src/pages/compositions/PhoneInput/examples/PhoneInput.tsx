
import countries from 'countries-phone-masks'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/input'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/select-button'
import '@nectary/components/flag'

const inputStyles: CSSProperties = {
  width: 300,
}

export const PhoneInputExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuValue, setMenuValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onMenuChange = (e: CustomEvent<string>) => {
    console.log('INPUT DETAILS', e.detail)
    onClose()
    setMenuValue(e.detail)
    console.log('INPUT DETAILS', e.detail)
  }
  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const phoneCode = countries.find((country) => country.iso === menuValue)?.code ?? ''
  const phoneMask = countries.find((country) => country.iso === menuValue)?.mask ?? ''

  console.log('PHONE MASK', phoneMask)

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Select"
      orientation="bottom"
      modal
      on-close={onClose}
    >
      <sinch-input
        slot="target"
        aria-label="Phone number"
        mask={(Array.isArray(phoneMask) ? phoneMask[0] : phoneMask).replaceAll('#', '0')} // Typing in country library is sometimes wrong. Ensures it's a string.
        placeholder="Phone Number"
        value={inputValue}
        style={inputStyles}
        on-change={onInputChange}
      >
        <sinch-select-button
          slot="left"
          size="s"
          text={phoneCode}
          placeholder="+0"
          aria-label="Open select"
          on-click={onOpen}
        >
          {menuValue.length > 0 && (
            <sinch-flag slot="icon" code={menuValue.toLowerCase()}/>
          )}
        </sinch-select-button>
      </sinch-input>
      <sinch-select-menu
        slot="content"
        rows={5}
        aria-label="Action menu"
        value={menuValue}
        on-change={onMenuChange}
      >
        {
          countries.map(({ code, iso, name }) => (
            <sinch-select-menu-option
              key={iso}
              value={iso}
              text={`(${code}) ${name}`}
              aria-label={name}
            >
              <sinch-flag slot="icon" code={iso.toLowerCase()}/>
            </sinch-select-menu-option>
          ))
        }
      </sinch-select-menu>
    </sinch-popover>
  )
}
