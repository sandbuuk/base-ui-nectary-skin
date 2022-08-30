import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/search'

type TInput = {
  search: URLSearchParams,
}

export const Input: FC<TInput> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-input-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-input-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-input-blur'))
  const type: any = search.get('type') ?? undefined
  const isInvalid = search.get('invalid') !== null
  const placeholderText = search.get('placeholder') ?? undefined
  const isDisabled = search.get('disabled') != null
  const hasRight = search.get('right') != null
  const hasIcon = search.get('icon') != null

  return (
    <sinch-input
      type={type}
      placeholder={placeholderText}
      disabled={isDisabled}
      invalid={isInvalid}
      value={value}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Input"
    >
      {hasIcon && (
        <sinch-icon-search slot="icon"/>
      )}
      {hasRight && (
        <>
          <sinch-tag slot="right" text="text"/>
          <sinch-icon-button slot="right" small aria-label="Button" onClick={() => {}}>
            <sinch-icon-close slot="icon"/>
          </sinch-icon-button>
        </>
      )}
    </sinch-input>
  )
}
