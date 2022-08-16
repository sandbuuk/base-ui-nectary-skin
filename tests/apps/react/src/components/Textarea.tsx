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
  const labelText = search.get('label') ?? ''
  const optionalText = search.get('optional') ?? undefined
  const additionalText = search.get('additional') ?? undefined
  const invalidText = search.get('invalid') ?? undefined
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const isResizable = search.get('resizable') === 'true'
  const tooltip = search.get('tooltip') != null && (
    <sinch-help-tooltip text={search.get('tooltip')!} slot="tooltip"/>
  )

  return (
    <sinch-textarea
      label={labelText}
      optionalText={optionalText}
      additionalText={additionalText}
      invalidText={invalidText}
      placeholder={placeholderText}
      disabled={isDisabled}
      value={value}
      rows={rows}
      resizable={isResizable}
      on-change={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-label="Textarea"
    >
      {tooltip}
    </sinch-textarea>
  )
}
