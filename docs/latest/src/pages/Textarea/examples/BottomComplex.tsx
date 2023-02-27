import { useRef, useState } from 'react'
import type { TSinchTextareaElement } from '@sinch-engage/nectary/textarea/types'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/emoji-picker'
import '@sinch-engage/nectary/file-picker'
import '@sinch-engage/nectary-assets/icons/mood'
import '@sinch-engage/nectary-assets/icons/variables'
import '@sinch-engage/nectary-assets/icons/attach-file'
import '@sinch-engage/nectary-assets/icons/add-comment'
import '@sinch-engage/nectary-assets/icons/more-horiz'
import '@sinch-engage/nectary-assets/icons/send'
import '@sinch-engage/nectary-assets/icons/settings'

export const BottomComplexExample: FC = () => {
  const [text, setText] = useState('')
  const [isOptionsOpen, setOptionsOpen] = useState(false)
  const [isPopOpen, setPopOpen] = useState(false)
  const [popMode, setPopMode] = useState<'emoji' | 'vars' | null>(null)
  const [opts, setOpts] = useState('')
  const inputRef = useRef<TSinchTextareaElement>(null)

  const onPopOpenClick = (mode: 'emoji' | 'vars') => {
    setPopMode(mode)
    setPopOpen(true)
  }
  const onOptsOpenClick = () => {
    setPopOpen(false)
    setOptionsOpen(true)
  }
  const onOptsChange = (e: CustomEvent<string>) => {
    setOpts(e.detail)
  }
  const onTextChange = (e: CustomEvent<string>) => {
    if (e.detail.endsWith('{')) {
      onPopOpenClick('vars')
    }

    setText(e.detail)
  }
  const onVarClick = (varValue: string) => () => {
    let val = text

    if (val.endsWith('{')) {
      val = val.substring(0, text.length - 1)
    }

    const pos = inputRef.current!.selectionStart ?? text.length

    setText((val) => val.substring(0, pos) + varValue + val.substring(pos))
    setPopOpen(false)
  }
  const onEmojiChange = (e: CustomEvent<string>) => {
    const pos = inputRef.current!.selectionStart ?? text.length

    setText((val) => val.substring(0, pos) + e.detail + val.substring(pos))
    setPopOpen(false)
  }

  return (
    <sinch-popover
      aria-label="Pop"
      open={isPopOpen}
      onClose={() => setPopOpen(false)}
      orientation="bottom-right"
    >
      <sinch-textarea
        slot="target"
        ref={inputRef}
        aria-label="Textarea"
        placeholder="Type your text"
        value={text}
        on-change={onTextChange}
        style={{ width: '500px' }}
      >
        <sinch-file-picker
          slot="bottom"
          on-change={() => {}}
          on-invalid={() => {}}
          style={{ marginLeft: 'auto' }}
        >
          <sinch-icon-button aria-label="Attach file">
            <sinch-icon-attach-file slot="icon"/>
          </sinch-icon-button>
        </sinch-file-picker>
        <sinch-icon-button slot="bottom" aria-label="Emojis" on-click={() => onPopOpenClick('emoji')}>
          <sinch-icon-mood slot="icon"/>
        </sinch-icon-button>
        <sinch-icon-button slot="bottom" aria-label="Variables" on-click={() => onPopOpenClick('vars')}>
          <sinch-icon-variables slot="icon"/>
        </sinch-icon-button>
        <sinch-popover
          slot="bottom"
          modal
          orientation="bottom-left"
          open={isOptionsOpen}
          onClose={() => setOptionsOpen(false)}
          aria-label="Options"
        >
          <sinch-icon-button
            slot="target"
            aria-label="More"
            on-click={onOptsOpenClick}
          >
            <sinch-icon-more-horiz slot="icon"/>
          </sinch-icon-button>
          <sinch-select-menu
            slot="content"
            multiple
            value={opts}
            on-change={onOptsChange}
            aria-label="Action menu"
          >
            <sinch-select-menu-option value="view" text="View only" aria-label="View only"/>
            <sinch-select-menu-option value="others" text="Allow others" aria-label="Allow others"/>
          </sinch-select-menu>
          <sinch-action-menu aria-label="Action menu" slot="content">
            <sinch-action-menu-option text="Settings" aria-label="Settings" on-click={() => setOptionsOpen(false)}>
              <sinch-icon-settings slot="icon"/>
            </sinch-action-menu-option>
          </sinch-action-menu>
        </sinch-popover>
      </sinch-textarea>
      {popMode === 'emoji' && <sinch-emoji-picker slot="content" on-change={onEmojiChange}/>}
      {popMode === 'vars' && (
        <sinch-action-menu aria-label="Variables menu" slot="content">
          <sinch-action-menu-option text="context" aria-label="var 1" on-click={onVarClick('context')}/>
          <sinch-action-menu-option text="orders" aria-label="var 1" on-click={onVarClick('orders')}/>
          <sinch-action-menu-option text="users" aria-label="var 1" on-click={onVarClick('users')}/>
          <sinch-action-menu-option text="clients" aria-label="var 1" on-click={onVarClick('clients')}/>
        </sinch-action-menu>
      )}
    </sinch-popover>
  )
}
