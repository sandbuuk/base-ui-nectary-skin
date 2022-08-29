import { useState } from 'react'
import type { TSinchPopoverOrientation } from '@sinch-engage/nectary/popover/types'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/button'
import type { FC } from 'react'

type TActionMenu = {
  search: URLSearchParams,
}

export const ActionMenu: FC<TActionMenu> = ({ search }) => {
  const orientation = search.get('orientation') as TSinchPopoverOrientation ?? undefined
  const [value, setValue] = useState('')
  const [isOpen, setOpen] = useState(search.get('open') !== null)
  const onOpen = () => {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-open'))
    setOpen(true)
  }
  const onClose = () => {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-close'))
    setOpen(false)
  }
  const onOptionClick = (text: string) => {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-click', { detail: text }))
    setOpen(false)
  }
  const onValueChange = (e: CustomEvent) => {
    window.dispatchEvent(new CustomEvent('sinch-input-change'))
    setValue(e.detail)
  }
  const maxVisibleItems = (() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  })()
  const isModal = search.get('modal') !== null

  return (
    <sinch-action-menu
      open={isOpen}
      maxVisibleItems={maxVisibleItems}
      orientation={orientation}
      on-close={onClose}
      aria-label="Dropdown"
      modal={isModal}
    >
      <sinch-input
        slot="target"
        label="Input"
        aria-label="Input"
        value={value}
        on-change={onValueChange}
      >
        <sinch-button
          slot="right"
          small
          type="cta-secondary"
          text="Open"
          aria-label="Open"
          on-click={onOpen}
        />
      </sinch-input>
      <sinch-action-menu-option text="Option 1 value long long long" slot="option" aria-label="Option 1" on-click={() => onOptionClick('Option 1 value long long long')}>
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option text="Option 2 value" slot="option" disabled aria-label="Option 2" on-click={() => onOptionClick('Option 2 value')}>
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option text="Option 3 value" slot="option" disabled={false} aria-label="Option 3" on-click={() => onOptionClick('Option 3 value')}/>
      <sinch-action-menu-option text="Option 4 value" slot="option" aria-label="Option 4" on-click={() => onOptionClick('Option 4 value')}/>
    </sinch-action-menu>
  )
}
