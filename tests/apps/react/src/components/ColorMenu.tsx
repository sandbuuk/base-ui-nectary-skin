import { NO_COLOR } from '@sinch-engage/nectary/utils/colors'
import { useState } from 'react'
import type { TSinchColorName } from '@sinch-engage/nectary/utils/colors'
import type { FC } from 'react'
import '@sinch-engage/nectary/color-menu'

type TSelectMenu = {
  search: URLSearchParams,
}

export const ColorMenu: FC<TSelectMenu> = ({ search }) => {
  const [value, setValue] = useState((search.get('value') ?? NO_COLOR) as TSinchColorName)
  const onChange = (e: CustomEvent<TSinchColorName>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-color-menu-change', { detail: value }))
    setValue(value)
  }
  const colors = search.get('colors') ?? undefined
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const cols = (() => {
    const val = search.get('cols')

    return val !== null ? parseInt(val) : undefined
  })()

  return (
    <sinch-color-menu
      cols={cols}
      rows={rows}
      colors={colors}
      value={value}
      on-change={onChange}
      aria-label="Menu"
    />
  )
}
