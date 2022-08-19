import { attrValueToInteger } from '@sinch-engage/nectary/utils'
import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/pagination'

type TPagination = {
  search: URLSearchParams,
}

export const Pagination: FC<TPagination> = ({ search }) => {
  const [value, setValue] = useState(attrValueToInteger(search.get('value')))
  const max = attrValueToInteger(search.get('max'))
  const isControlled = search.get('uncontrolled') === null
  const onChange = (e: CustomEvent<number>) => {
    window.dispatchEvent(new CustomEvent('sinch-pagination-change', { detail: e.detail }))

    if (isControlled) {
      setValue(e.detail)
    }
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-pagination-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-pagination-blur'))

  return (
    <sinch-pagination
      value={value!}
      max={max!}
      on-change={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
