import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/icon'

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
  5: { text: 'Option 1 value long long long', icon: '1' },
  6: { text: 'Option 2', icon: '1', isDisabled: true },
  7: { text: 'Option 3', icon: null },
  8: { text: 'Option 4', icon: null },
}

export const SelectMenu: FC = () => {
  const [search] = useSearchParams()
  const isMultiple = search.get('multiple') !== null
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-select-menu-change', { detail: value }))
    setValue(value)
  }
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const isLotsItemsExample = search.get('example') === 'lots'

  const items = isLotsItemsExample
    ? Object.entries(options)
    : Object.entries(options).slice(0, 4)

  return (
    <sinch-select-menu
      rows={rows}
      multiple={isMultiple}
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
              <sinch-icon name="fa-arrow-up-right-from-square" slot="icon"/>
            )}
          </sinch-select-menu-option>
        ))
      }
    </sinch-select-menu>
  )
}
