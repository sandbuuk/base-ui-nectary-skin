import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/checkbox'

interface CheckboxProps {
  searchPrefix?: string,
  slot?: string,
}

export const Checkbox: FC<CheckboxProps> = ({ searchPrefix = 'checkbox', slot }) => {
  const [search] = useComponentSearchParams(searchPrefix)
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
  const name = search.get('name') ?? ''
  const valueData = search.get('value') ?? ''

  return (
    <sinch-checkbox
      slot={slot}
      name={name}
      value={valueData}
      text={text}
      aria-label={text}
      disabled={isDisabled}
      indeterminate={isIndeterminate}
      invalid={isInvalid}
      checked={value}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
    />
  )
}
