import { useCallback, useMemo, useState } from 'react'
import type { TSinchActionMenuOptionElement } from '@sinch-engage/nectary/action-menu-option/types'
import type { TSinchPopoverOrientation } from '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import type { FC, MouseEvent } from 'react'

type TActionMenu = {
  search: URLSearchParams,
}

export const ActionMenu: FC<TActionMenu> = ({ search }) => {
  const orientation = search.get('orientation') as TSinchPopoverOrientation ?? undefined
  const [isOpen, setOpen] = useState(search.get('open') !== null)
  const onClose = useCallback(() => {
    console.log('close')
    window.dispatchEvent(new CustomEvent('sinch-action-menu-close'))
    setOpen(false)
  }, [])
  const onClick = useCallback((e: MouseEvent<TSinchActionMenuOptionElement>) => {
    console.log('click')
    window.dispatchEvent(new CustomEvent('sinch-action-menu-click', { detail: e.currentTarget.text }))
    setOpen(false)
  }, [])
  const maxVisibleItems = useMemo(() => {
    const val = search.get('maxvisibleitems')

    return val !== null ? parseInt(val) : undefined
  }, [search])

  return (
    <sinch-action-menu
      open={isOpen}
      maxVisibleItems={maxVisibleItems}
      orientation={orientation}
      onClose={onClose}
      aria-label="Dropdown"
    >
      <sinch-button
        slot="target"
        type="cta-secondary"
        text="Some content"
        aria-label="Button"
        onClick={() => {
          setOpen(true)
        }}
      />
      <sinch-action-menu-option text="Option 1 value long long long" slot="option" aria-label="Option 1" onClick={onClick}>
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option text="Option 2 value" slot="option" disabled aria-label="Option 2" onClick={onClick}>
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-action-menu-option>
      <sinch-action-menu-option text="Option 3 value" slot="option" disabled={false} aria-label="Option 3" onClick={onClick}/>
      <sinch-action-menu-option text="Option 4 value" slot="option" aria-label="Option 4" onClick={onClick}/>
    </sinch-action-menu>
  )
}
