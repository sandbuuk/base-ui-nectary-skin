import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { TSinchInputClipboardEvent } from '@nectary/components/input/types'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/select-button'
import '@nectary/components/tag'
import '@nectary/components/chip'
import '@nectary/assets/icons/fa-magnifying-glass'

export const Input: FC = () => {
  const [search] = useSearchParams()
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-input-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-input-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-input-blur'))
  const onCopy = search.get('copy') != null
    ? (e: TSinchInputClipboardEvent) => {
      const { value, replaceWith } = e.detail

      replaceWith('REPLACED')

      window.dispatchEvent(new CustomEvent('sinch-input-copy', { detail: value }))
    }
    : undefined
  const onCut = search.get('cut') != null
    ? (e: TSinchInputClipboardEvent) => {
      const { value, replaceWith } = e.detail

      replaceWith('REPLACED')

      window.dispatchEvent(new CustomEvent('sinch-input-cut', { detail: value }))
    }
    : undefined
  const onPaste = search.get('paste') != null
    ? (e: TSinchInputClipboardEvent) => {
      const { value, replaceWith } = e.detail

      replaceWith('REPLACED')

      window.dispatchEvent(new CustomEvent('sinch-input-paste', { detail: value }))
    }
    : undefined
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
        <sinch-icon-fa-magnifying-glass slot="icon"/>
      )}
      {hasLeft && (
        <sinch-select-button
          slot="left"
          text="+0"
          placeholder=""
          aria-label=""
          on-click={() => { }}
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
