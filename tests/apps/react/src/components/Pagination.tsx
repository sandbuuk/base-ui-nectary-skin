import { attrValueToInteger } from '@nectary/components/utils'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/pagination'

export const Pagination: FC = () => {
  const [search] = useSearchParams()
  const [value, setValue] = useState(() => attrValueToInteger(search.get('value')) ?? 0)
  const max = attrValueToInteger(search.get('max')) ?? 0
  const onChange = (e: CustomEvent<number>) => {
    window.dispatchEvent(new CustomEvent('sinch-pagination-change', { detail: e.detail }))

    setValue(e.detail)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-pagination-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-pagination-blur'))

  return (
    <sinch-pagination
      value={value}
      max={max}
      on-change={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
