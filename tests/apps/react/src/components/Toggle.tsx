import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/toggle'

type TToggle = {
  search: URLSearchParams,
}

export const Toggle: FC<TToggle> = ({ search }) => {
  const [value, setValue] = useState(search.get('checked') !== null)
  const onChange = (e: CustomEvent<boolean>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-toggle-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-toggle-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-toggle-blur'))
  const isDisabled = search.get('disabled') != null
  const isSmall = search.get('small') != null
  const isLabeled = search.get('labeled') != null
  const text: any = search.get('text') ?? undefined

  return (
    <sinch-toggle
      text={text}
      aria-label="Toggle"
      small={isSmall}
      disabled={isDisabled}
      labeled={isLabeled}
      checked={value}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
    />
  )
}
