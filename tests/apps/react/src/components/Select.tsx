import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/icons/keyboard-arrow-down'
import '@sinch-engage/nectary/icons/open-in-new'

type TSelect = {
  search: URLSearchParams,
}

type TMenuValue = {
  text: string,
  icon: string | null,
  isDisabled?: boolean,
}

const options: Record<string, TMenuValue> = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
}

export const Select: FC<TSelect> = ({ search }) => {
  const [value, setValue] = useState<string>(search.get('value') ?? '')
  const [isOpen, setOpen] = useState(false)
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-select-change', { detail: value }))
    setValue(value)
    setOpen(false)
  }
  const onClick = () => {
    window.dispatchEvent(new CustomEvent('sinch-select-click'))
    setOpen((isOpen) => !isOpen)
  }
  const onClose = () => {
    setOpen(false)
  }
  const onFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-select-focus'))
  }
  const onBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-select-blur'))
  }
  const isDisabled = search.get('disabled') != null
  const isInvalid = search.get('invalid') != null
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()

  return (
    <sinch-popover
      open={isOpen}
      aria-label="Popover"
      on-close={onClose}
      orientation="bottom"
      modal
    >
      <sinch-field
        slot="target"
        label="Select"
        invalidText={isInvalid ? 'Invalid option selected' : ''}
        disabled={isDisabled}
      >
        <sinch-select-button
          slot="input"
          text={options[value]?.text ?? ''}
          placeholder="Select option"
          invalid={isInvalid}
          disabled={isDisabled}
          aria-label="Input"
          on-click={onClick}
          on-focus={onFocus}
          on-blur={onBlur}
        >
          {options[value]?.icon === '1' && (
            <sinch-icon-open-in-new slot="icon"/>
          )}
          <sinch-icon-keyboard-arrow-down slot="right"/>
        </sinch-select-button>
      </sinch-field>
      <sinch-select-menu
        slot="content"
        rows={rows}
        value={value}
        on-change={onChange}
        aria-label="Menu"
      >
        {
          Object.entries(options).map(([key, { text, icon, isDisabled }]) => (
            <sinch-select-menu-option
              key={key}
              value={key}
              text={text}
              disabled={isDisabled}
              aria-label={text}
            >
              {icon === '1' && (
                <sinch-icon-open-in-new slot="icon"/>
              )}
            </sinch-select-menu-option>
          ))
        }
      </sinch-select-menu>
    </sinch-popover>
  )
}
