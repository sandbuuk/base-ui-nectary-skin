import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary-assets/icons/open-in-new'
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

type TActionMenu = {
  search: URLSearchParams,
}

export const ActionMenu: FC<TActionMenu> = ({ search }) => {
  const onOptionClick = (value: string) => {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-click', { detail: value }))
  }
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()

  return (
    <sinch-action-menu
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
            {icon === '1' && <sinch-icon-open-in-new slot="icon"/>}
          </sinch-action-menu-option>
        ))
      }
    </sinch-action-menu>
  )
}
