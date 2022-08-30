import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'

type TTextarea = {
  search: URLSearchParams,
}

export const Textarea: FC<TTextarea> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-textarea-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-textarea-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-textarea-blur'))
  const placeholderText = search.get('placeholder') ?? undefined
  const isInvalid = search.get('invalid') !== null
  const isDisabled = search.get('disabled') != null
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const isResizable = search.get('resizable') === 'true'

  return (
    <sinch-textarea
      invalid={isInvalid}
      placeholder={placeholderText}
      disabled={isDisabled}
      value={value}
      rows={rows}
      resizable={isResizable}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Textarea"
    />
  )
}
