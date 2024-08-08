import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/assets/icons/fa-ellipsis'
import '@nectary/assets/icons/fa-paperclip-vertical'
import '@nectary/assets/icons/fa-face-laugh'
import '@nectary/assets/icons/fa-comment-plus'
import '@nectary/assets/icons/fa-paper-plane-top'
import '@nectary/assets/icons/fa-magnifying-glass'

export const Textarea: FC = () => {
  const [search] = useSearchParams()
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
  const minRows = (() => {
    const val = search.get('minrows')

    return val !== null ? parseInt(val) : undefined
  })()
  const isResizable = search.get('resizable') !== null
  const hasBottom = search.get('bottom') !== null

  return (
    <sinch-textarea
      invalid={isInvalid}
      placeholder={placeholderText}
      disabled={isDisabled}
      value={value}
      rows={rows}
      minRows={minRows}
      resizable={isResizable}
      on-change={onChange}
      on-focus={onFocus}
      on-blur={onBlur}
      aria-label="Textarea"
    >
      {hasBottom && (
        <>
          <sinch-button slot="bottom" aria-label="Paperclip">
            <sinch-icon-fa-paperclip-vertical slot="icon"/>
          </sinch-button>
          <sinch-button slot="bottom" aria-label="Emoji">
            <sinch-icon-fa-face-laugh slot="icon"/>
          </sinch-button>
          <sinch-button slot="bottom" aria-label="Variables">
            <sinch-icon-fa-magnifying-glass slot="icon"/>
          </sinch-button>
          <sinch-button slot="bottom" aria-label="Comment">
            <sinch-icon-fa-comment-plus slot="icon"/>
          </sinch-button>
          <sinch-button slot="bottom" aria-label="Comment">
            <sinch-icon-fa-ellipsis slot="icon"/>
          </sinch-button>
          <sinch-tag
            slot="bottom"
            text="400"
            color="success"
            style={{ marginLeft: 'auto' }}
          />
          <sinch-button
            slot="bottom"
            type="primary"
            aria-label="Send"
            text="Send"
          >
            <sinch-icon-fa-paper-plane-top slot="right-icon"/>
          </sinch-button>
        </>
      )}
    </sinch-textarea>
  )
}
