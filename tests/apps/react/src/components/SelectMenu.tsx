import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/icon'
import '@nectary/components/title'

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

const sectionedOptions: Record<string, TMenuValue[]> = {
  'Section 1': [{ text: 'Option 1 value long long long', icon: '1' }, { text: 'Option 2', icon: '1', isDisabled: true }],
  'Section 2': [{ text: 'Option 3', icon: null }],
  'Section 3': [{ text: 'Option 4', icon: null }, { text: 'Option 5', icon: '1' }],
  'Section 4': [{ text: 'Option 6', icon: '1', isDisabled: true }, { text: 'Option 7', icon: null }],
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
  const isSectionedExample = search.get('section') === 'true'

  const usedOptions = isSectionedExample ? sectionedOptions : options

  const items: (([string, TMenuValue] | [string, TMenuValue[]])[]) = isLotsItemsExample
    ? Object.entries(usedOptions)
    : Object.entries(usedOptions).slice(0, 4)

  return (
    <sinch-select-menu
      rows={rows}
      multiple={isMultiple}
      value={value}
      on-change={onChange}
      aria-label="Menu"
    >
      {
        items.map(([key, menu]) => {
          if (Array.isArray(menu)) {
            return (
              <>
                <sinch-title type="s" level="4" text={key}/>
                {menu.map((menu) => (
                  <sinch-select-menu-option
                    key={key}
                    value={key}
                    text={menu.text}
                    disabled={menu.isDisabled}
                    aria-label={menu.text}
                  >
                    {menu.icon === '1' && (
                      <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
                    )}
                  </sinch-select-menu-option>
                ))}
              </>
            )
          }

          return (
            <sinch-select-menu-option
              key={key}
              value={key}
              text={menu.text}
              disabled={menu.isDisabled}
              aria-label={menu.text}
            >
              {menu.icon === '1' && (
                <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
              )}
            </sinch-select-menu-option>
          )
        })
      }
    </sinch-select-menu>
  )
}
