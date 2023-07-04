import { useState } from 'react'
import type { TSinchInputClipboardEvent } from '@sinch-engage/nectary/input/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary-assets/icons/search'

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
  const onCopy = (e: TSinchInputClipboardEvent) => {
    const { value, replaceWith } = e.detail

    replaceWith('REPLACED VALUE')

    window.dispatchEvent(new CustomEvent('sinch-input-copy', { detail: value }))
  }
  const onCut = (e: TSinchInputClipboardEvent) => {
    const { value } = e.detail

    window.dispatchEvent(new CustomEvent('sinch-input-cut', { detail: value }))
  }
  const onPaste = (e: TSinchInputClipboardEvent) => {
    const { value, replaceWith } = e.detail

    replaceWith('REPLACED VALUE')

    window.dispatchEvent(new CustomEvent('sinch-input-paste', { detail: value }))
  }
  const type: any = search.get('type') ?? undefined
  const size: any = search.get('size') ?? undefined
  const isInvalid = search.get('invalid') !== null
  const mask = search.get('mask') ?? undefined
  const placeholder = search.get('placeholder') ?? undefined
  const autocomplete = search.get('autocomplete') ?? undefined
  const isDisabled = search.get('disabled') != null
  const hasLeft = search.get('left') != null
  const hasRight = search.get('right') != null
  const hasIcon = search.get('icon') != null

  return (
    <sinch-input
      type={type}
      size={size}
      mask={mask}
      placeholder={placeholder}
      disabled={isDisabled}
      invalid={isInvalid}
      autocomplete={autocomplete}
      value={value}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
      on-copy={onCopy}
      on-cut={onCut}
      on-paste={onPaste}
      aria-label="Input"
    >
      {hasIcon && (
        <sinch-icon-search slot="icon"/>
      )}
      {hasLeft && (
        <sinch-select-button
          slot="left"
          text="+0"
          placeholder=""
          aria-label=""
          on-click={() => {}}
        />
      )}
      {hasRight && (
        <>
          <sinch-tag slot="right" text="tag"/>
          <sinch-chip slot="right" text="chip" aria-label=""/>
        </>
      )}
    </sinch-input>
  )
}
