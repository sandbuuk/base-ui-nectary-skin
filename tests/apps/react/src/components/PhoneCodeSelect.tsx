import { countries } from '@nectary/components/utils/countries'
import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/popover'
import '@nectary/components/input'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/select-button'
import '@nectary/components/flag'

type TSelect = {
  search: URLSearchParams,
}

const countriesArr = Object.entries(countries)

export const PhoneCodeSelect: FC<TSelect> = ({ search }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuValue, setMenuValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onMenuChange = (e: CustomEvent<string>) => {
    onClose()
    setMenuValue(e.detail)
  }
  const onInputChange = (e: CustomEvent<string>) => {
    setInputValue(e.detail)
  }
  const text = countries[menuValue]?.phoneCode ?? ''
  const size: any = search.get('size') ?? undefined

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
        placeholder="Phone number"
        size={size}
        value={inputValue}
        on-change={onInputChange}
      >
        <sinch-select-button
          slot="left"
          text={text}
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
        aria-label="Action menu"
        rows={5}
        value={menuValue}
        on-change={onMenuChange}
      >
        {
          countriesArr.map(([code, data]) => (
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
