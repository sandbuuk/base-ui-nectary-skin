import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/emoji-picker'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary-assets/icons/mood'
import '@sinch-engage/nectary-assets/icons/attach-file'
import '@sinch-engage/nectary-assets/icons/variables'
import '@sinch-engage/nectary-assets/icons/add-comment'
import '@sinch-engage/nectary-assets/icons/more-horiz'
import '@sinch-engage/nectary-assets/icons/send'

type TTextarea = {
  search: URLSearchParams,
}

export const TextareaExample: FC<TTextarea> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const [isPopOpen, setPopOpen] = useState(false)
  const [popMode, setPopMode] = useState<'emoji' | 'vars' | null>(null)
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-textarea-change', { detail: value }))
    setValue(value)
  }
  const onPopOpenClick = (mode: 'emoji' | 'vars') => {
    setPopMode(mode)
    setPopOpen(true)
  }
  const isInvalid = search.get('invalid') !== null
  const isDisabled = search.get('disabled') != null
  const rows = (() => {
    const val = search.get('rows')

    return val !== null ? parseInt(val) : undefined
  })()
  const isResizable = search.get('resizable') !== null

  return (
    <sinch-popover
      open={isPopOpen}
      on-close={() => setPopOpen(false)}
      aria-label="Pop"
      orientation="top"
    >
      <sinch-textarea
        slot="target"
        invalid={isInvalid}
        placeholder="Type your text"
        disabled={isDisabled}
        value={value}
        rows={rows}
        resizable={isResizable}
        on-change={onChange}
        aria-label="Textarea"
      >
        <sinch-icon-button slot="bottom" aria-label="Paperclip">
          <sinch-icon-attach-file slot="icon"/>
        </sinch-icon-button>
        <sinch-icon-button slot="bottom" aria-label="Emoji" on-click={() => onPopOpenClick('emoji')}>
          <sinch-icon-mood slot="icon"/>
        </sinch-icon-button>
        <sinch-icon-button slot="bottom" aria-label="Variables" on-click={() => onPopOpenClick('vars')}>
          <sinch-icon-variables slot="icon"/>
        </sinch-icon-button>
        <sinch-icon-button slot="bottom" aria-label="Comment">
          <sinch-icon-add-comment slot="icon"/>
        </sinch-icon-button>
        <sinch-icon-button slot="bottom" aria-label="More">
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
      </sinch-textarea>
      {popMode === 'emoji' && <sinch-emoji-picker slot="content" on-change={() => {}}/>}
      {popMode === 'vars' && (
        <sinch-action-menu slot="content" aria-label="variables">
          <sinch-action-menu-option text="contents" aria-label="contents"/>
          <sinch-action-menu-option text="client" aria-label="client"/>
          <sinch-action-menu-option text="server" aria-label="server"/>
        </sinch-action-menu>
      )}
    </sinch-popover>
  )
}
