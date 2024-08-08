import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/select-button'
import '@nectary/components/popover'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/tag'
import '@nectary/assets/icons/fa-arrow-up-right-from-square'
import '@nectary/assets/icons/fa-magnifying-glass'

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
  7: { text: 'Option 1 value long long long', icon: '1' },
  8: { text: 'Option 2', icon: '1', isDisabled: true },
  9: { text: 'Option 3', icon: null },
  10: { text: 'Option 4', icon: null },
  11: { text: 'Option 1 value long long long', icon: '1' },
  12: { text: 'Option 2', icon: '1', isDisabled: true },
  13: { text: 'Option 3', icon: null },
  14: { text: 'Option 4', icon: null },
}

export const Select: FC = () => {
  const [search] = useSearchParams()
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
  const size: any = search.get('size') ?? undefined
  const isDisabled = search.get('disabled') != null
  const isInvalid = search.get('invalid') != null
  const hasLeft = search.get('left') != null
  const hasIcon = search.get('icon') != null
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const isLotsItemsExample = search.get('example') === 'lots'
  const items = isLotsItemsExample
    ? Object.entries(options)
    : Object.entries(options).slice(0, 4)

  return (
    <sinch-popover
      modal
      orientation="bottom"
      open={isOpen}
      aria-label="Popover"
      on-close={onClose}
    >
      <sinch-field
        slot="target"
        label="Select"
        invalidText={isInvalid ? 'Invalid option selected' : ''}
        disabled={isDisabled}
      >
        <sinch-select-button
          slot="input"
          size={size}
          text={options[value]?.text ?? ''}
          placeholder="Select option"
          invalid={isInvalid}
          disabled={isDisabled}
          aria-label="Input"
          on-click={onClick}
          on-focus={onFocus}
          on-blur={onBlur}
        >
          {hasLeft && (
            <>
              <sinch-tag slot="left" text="tag"/>
            </>
          )}
          {hasIcon && (
            <sinch-icon-fa-magnifying-glass slot="icon"/>
          )}
          {options[value]?.icon === '1' && (
            <sinch-icon-fa-arrow-up-right-from-square slot="icon"/>
          )}
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
          items.map(([key, { text, icon, isDisabled }]) => (
            <sinch-select-menu-option
              key={key}
              value={key}
              text={text}
              disabled={isDisabled}
              aria-label={text}
            >
              {icon === '1' && (
                <sinch-icon-fa-arrow-up-right-from-square slot="icon"/>
              )}
            </sinch-select-menu-option>
          ))
        }
      </sinch-select-menu>
    </sinch-popover>
  )
}
