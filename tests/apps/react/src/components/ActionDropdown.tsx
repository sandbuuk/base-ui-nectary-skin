import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/button'
import '@nectary/components/popover'
import '@nectary/assets/icons/fa-arrow-up-right-from-square'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'

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

export const ActionDropdown: FC = () => {
  const [search] = useSearchParams()
  const [isOpen, setOpen] = useState(false)
  const onOptionClick = (value: string) => {
    window.dispatchEvent(new CustomEvent('sinch-action-dropdown-click', { detail: value }))
    setOpen(false)
  }
  const onClick = () => {
    setOpen((isOpen) => !isOpen)
  }
  const onClose = () => {
    setOpen(false)
  }
  const onFocus = () => {
    window.dispatchEvent(new CustomEvent('sinch-action-dropdown-focus'))
  }
  const onBlur = () => {
    window.dispatchEvent(new CustomEvent('sinch-action-dropdown-blur'))
  }
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()

  return (
    <sinch-popover
      open={isOpen}
      on-close={onClose}
      aria-label="Actions"
      orientation="bottom-right"
      modal
    >
      <sinch-button
        slot="target"
        type="cta-primary"
        text="Open actions"
        aria-label="Open actions"
        on-focus={onFocus}
        on-blur={onBlur}
        on-click={onClick}
      />
      <sinch-action-menu
        slot="content"
        rows={rows}
        aria-label="Dropdown"
      >
        {
          Object.entries(options).map(([key, { text, icon, isDisabled }]) => (
            <sinch-action-menu-option
              key={key}
              text={text}
              aria-label={text}
              disabled={isDisabled}
              on-click={() => onOptionClick(key)}
            >
              {icon === '1' && <sinch-icon-fa-arrow-up-right-from-square slot="icon"/>}
            </sinch-action-menu-option>
          ))
        }
      </sinch-action-menu>
    </sinch-popover>
  )
}
