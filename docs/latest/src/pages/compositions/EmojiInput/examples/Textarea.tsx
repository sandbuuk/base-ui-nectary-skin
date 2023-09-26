import { useRef, useState } from 'react'
import type { TSinchTextareaElement } from '@nectary/components/textarea/types'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/field'
import '@nectary/components/popover'
import '@nectary/components/icon-button'
import '@nectary/components/emoji-picker'
import '@nectary/components/textarea'
import '@nectary/components/icon'

const inputStyles: CSSProperties = {
  width: 300,
}

export const TextareaExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('Input value')
  const inputRef = useRef<TSinchTextareaElement>(null)

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }
  const onEmojiChange = (e: CustomEvent<string>) => {
    const pos = inputRef.current!.selectionStart ?? value.length

    setValue((val) => val.substring(0, pos) + e.detail + val.substring(pos))
    setOpen(false)
  }
  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => setOpen(false)

  return (
    <sinch-field
      label="Emoji picker"
      additionalText="Additional text"
    >
      <sinch-textarea
        slot="input"
        ref={inputRef}
        aria-label="Pick emoji"
        placeholder="Placeholder"
        value={value}
        on-change={onChange}
      >
        <sinch-popover
          slot="bottom"
          style={inputStyles}
          open={isOpen}
          orientation="top-left"
          aria-label="Emoji input"
          on-close={onClose}
        >
          <sinch-icon-button
            slot="target"
            size="s"
            aria-label="Open Time Picker"
            on-click={onOpen}
          >
            <sinch-icon slot="icon" name="sentiment_satisfied"/>
          </sinch-icon-button>
          <sinch-emoji-picker
            slot="content"
            aria-label="Emoji Picker"
            on-change={onEmojiChange}
          />
        </sinch-popover>
      </sinch-textarea>
    </sinch-field>
  )
}
