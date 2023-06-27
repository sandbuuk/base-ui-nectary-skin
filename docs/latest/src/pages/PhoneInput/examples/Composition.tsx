import { countries } from '@sinch-engage/nectary/utils/countries'
import { useState } from 'react'
import type { TSinchInputClipboardEvent } from '@sinch-engage/nectary/input/types'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/flag'

const inputStyles: CSSProperties = {
  width: 300,
}

const countriesArray = Object.entries(countries)

export const CompositionExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuValue, setMenuValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputMask, setInputMask] = useState<string | null>()
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onMenuChange = (e: CustomEvent<string>) => {
    const country = e.detail

    onClose()
    setMenuValue(country)
    setInputMask(countries[country].phoneMask)
  }
  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const onInputPaste = (e: TSinchInputClipboardEvent) => {
    let value = e.detail.value

    if (value.startsWith('+46') || value.startsWith('0')) {
      value = value.substring(value.length - 9)
      setInputMask(countries.se.phoneMask)
      setMenuValue('se')
    }

    if (value !== e.detail.value) {
      // e.preventDefault()
      e.detail.replaceWith(value)
      // setInputValue(value)
    }
  }
  const phoneCode = countries[menuValue]?.phoneCode ?? ''

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
        mask={inputMask ?? undefined}
        value={inputValue}
        style={inputStyles}
        on-change={onInputChange}
        on-paste={onInputPaste}
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
            <sinch-flag slot="icon" code={menuValue}/>
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
          countriesArray.map(([code, data]) => (
            <sinch-select-menu-option
              key={code}
              value={code}
              text={`(${data.phoneCode}) ${data.name}`}
              aria-label={data.name}
            >
              <sinch-flag slot="icon" code={code}/>
            </sinch-select-menu-option>
          ))
        }
      </sinch-select-menu>
    </sinch-popover>
  )
}
