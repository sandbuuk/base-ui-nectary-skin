import countries from 'countries-phone-masks'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/input'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/select-button'
import '@nectary/components/flag'

const defaultInputStyles: CSSProperties = {
  width: 300,
}

export interface PhoneInputProps {
  placeholder?: string,
  value?: string,
  onChange?: (value: string) => void,
  style?: CSSProperties,
  ariaLabel?: string,
}

export const PhoneInput: FC<PhoneInputProps> = ({
  placeholder = 'Phone Number',
  value: controlledValue,
  onChange,
  style = defaultInputStyles,
  ariaLabel = 'Phone number',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuValue, setMenuValue] = useState('')
  const [internalValue, setInternalValue] = useState('')
  const inputValue = controlledValue ?? internalValue
  const setInputValue = onChange != null
    ? (v: string) => {
      onChange(v); setInternalValue(v)
    }
    : setInternalValue

  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onMenuChange = (e: CustomEvent<string>) => {
    onClose()
    setMenuValue(e.detail)
  }
  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const phoneCode = countries.find((country) => country.iso === menuValue)?.code ?? ''
  const phoneMask = countries.find((country) => country.iso === menuValue)?.mask ?? ''

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
        aria-label={ariaLabel}
        mask={(Array.isArray(phoneMask) ? phoneMask[0] : phoneMask).replaceAll('#', '0')}
        placeholder={placeholder}
        value={inputValue}
        style={style}
        on-change={onInputChange}
      >
        <sinch-select-button
          slot="left"
          size="s"
          text={phoneCode}
          placeholder="+0"
          aria-label="Open area code select"
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
        aria-label={menuValue !== '' ? `Area code selected ${menuValue}` : 'Select area code'}
        value={menuValue}
        on-change={onMenuChange}
      >
        {countries.map(({ code, iso, name }) => (
          <sinch-select-menu-option
            key={iso}
            value={iso}
            text={`(${code}) ${name}`}
            aria-label={`Select ${name}`}
          >
            <sinch-flag slot="icon" code={iso.toLowerCase()}/>
          </sinch-select-menu-option>
        ))}
      </sinch-select-menu>
    </sinch-popover>
  )
}
