import { attrValueToInteger } from '@sinch-engage/nectary/utils'
import { useCallback, useState } from 'react'
import type { FC, SyntheticEvent } from 'react'
import '@sinch-engage/nectary/pagination'

type TPagination = {
  search: URLSearchParams,
}

export const Pagination: FC<TPagination> = ({ search }) => {
  const [value, setValue] = useState(attrValueToInteger(search.get('value')))
  const max = attrValueToInteger(search.get('max'))
  const isControlled = search.get('uncontrolled') === null
  const onChange = useCallback((e: SyntheticEvent<Element, CustomEvent<number>>) => {
    window.dispatchEvent(new CustomEvent('sinch-pagination-change', { detail: e.nativeEvent.detail }))

    if (isControlled) {
      setValue(e.nativeEvent.detail)
    }
  }, [])
  const onFocus = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-pagination-focus')), [])
  const onBlur = useCallback(() => window.dispatchEvent(new CustomEvent('sinch-pagination-blur')), [])

  return (
    <sinch-pagination
      value={value as number}
      max={max as number}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
