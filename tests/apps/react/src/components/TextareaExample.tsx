import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { FC } from 'react'
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/popover'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/emoji-picker'
import '@nectary/components/tag'
import '@nectary/components/icon'

export const TextareaExample: FC = () => {
  const [search] = useSearchParams()
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
        <sinch-button slot="bottom" aria-label="Paperclip">
          <sinch-icon name="fa-paperclip-vertical" slot="icon"/>
        </sinch-button>
        <sinch-button slot="bottom" aria-label="Emoji" on-click={() => onPopOpenClick('emoji')}>
          <sinch-icon name="fa-face-laugh" slot="icon"/>
        </sinch-button>
        <sinch-button slot="bottom" aria-label="Variables" on-click={() => onPopOpenClick('vars')}>
          <sinch-icon name="fa-brackets-curly" slot="icon"/>
        </sinch-button>
        <sinch-button slot="bottom" aria-label="Comment">
          <sinch-icon name="fa-comment-plus" slot="icon"/>
        </sinch-button>
        <sinch-button slot="bottom" aria-label="More">
          <sinch-icon name="fa-ellipsis" slot="icon"/>
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
          <sinch-icon name="fa-paper-plane-top" slot="right-icon"/>
        </sinch-button>
      </sinch-textarea>
      {popMode === 'emoji' && <sinch-emoji-picker slot="content" on-change={() => { }}/>}
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
