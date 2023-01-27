import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/icons/mood'
import '@sinch-engage/nectary-assets/icons/attach-file'
import '@sinch-engage/nectary-assets/icons/search'
import '@sinch-engage/nectary-assets/icons/add-comment'
import '@sinch-engage/nectary-assets/icons/more-horiz'
import '@sinch-engage/nectary-assets/icons/send'

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
  const isResizable = search.get('resizable') !== null
  const hasBottom = search.get('bottom') !== null

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
    >
      {hasBottom && (
        <>
          <sinch-icon-button slot="bottom" aria-label="Paperclip">
            <sinch-icon-attach-file slot="icon"/>
          </sinch-icon-button>
          <sinch-icon-button slot="bottom" aria-label="Emoji">
            <sinch-icon-mood slot="icon"/>
          </sinch-icon-button>
          <sinch-icon-button slot="bottom" aria-label="Variables">
            <sinch-icon-search slot="icon"/>
          </sinch-icon-button>
          <sinch-icon-button slot="bottom" aria-label="Comment">
            <sinch-icon-add-comment slot="icon"/>
          </sinch-icon-button>
          <sinch-icon-button slot="bottom" aria-label="Comment">
            <sinch-icon-more-horiz slot="icon"/>
          </sinch-icon-button>
          <sinch-tag
            slot="bottom"
            text="400"
            color="olive"
            style={{ marginLeft: 'auto' }}
          />
          <sinch-button
            slot="bottom"
            type="primary"
            aria-label="Send"
            text="Send"
          >
            <sinch-icon-send slot="right-icon"/>
          </sinch-button>
        </>
      )}
    </sinch-textarea>
  )
}
