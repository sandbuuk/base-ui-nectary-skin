import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/checkbox'

type TCheckbox = {
  search: URLSearchParams,
}

export const Checkbox: FC<TCheckbox> = ({ search }) => {
  const [value, setValue] = useState(search.get('checked') !== null)
  const onChange = (e: CustomEvent<boolean>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-checkbox-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-checkbox-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-checkbox-blur'))
  const isDisabled = search.get('disabled') != null
  const isIndeterminate = search.get('indeterminate') != null
  const isInvalid = search.get('invalid') != null
  const text: any = search.get('text') ?? undefined

  return (
    <sinch-checkbox
      text={text}
      disabled={isDisabled}
      indeterminate={isIndeterminate}
      invalid={isInvalid}
      checked={value}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Checkbox"
    />
  )
}
