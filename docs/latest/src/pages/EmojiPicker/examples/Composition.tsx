import { useState, useRef } from 'react'
import type { TSinchInputElement } from '@sinch-engage/nectary/input/types'
import type { FC, CSSProperties } from 'react'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/spinner'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/emoji-picker'
import '@sinch-engage/nectary-assets/icons/sentiment-satisfied'

const inputStyles: CSSProperties = {
  width: 300,
}

export const CompositionExample: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [value, setValue] = useState('Input value')
  const inputRef = useRef<TSinchInputElement>(null)
  const firstIsOpenRef = useRef(false)

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }
  const onEmojiChange = (e: CustomEvent<string>) => {
    const pos = inputRef.current!.selectionStart ?? value.length

    setValue((val) => val.substring(0, pos) + e.detail + val.substring(pos))
    setOpen(false)
  }
  const onOpen = () => {
    firstIsOpenRef.current = true
    setOpen(true)
  }
  const onClose = () => setOpen(false)

  return (
    <sinch-field
      label="Emoji picker"
      additionalText="Additional text"
    >
      <sinch-popover
        slot="input"
        style={inputStyles}
        open={isOpen}
        orientation="bottom-left"
        aria-label="Emoji input"
        on-close={onClose}
      >
        <sinch-input
          slot="target"
          ref={inputRef}
          aria-label="Pick emoji"
          placeholder="Placeholder"
          value={value}
          on-change={onChange}
        >
          <sinch-icon-button
            slot="right"
            size="s"
            aria-label="Open Time Picker"
            on-click={onOpen}
          >
            <sinch-icon-sentiment-satisfied slot="icon"/>
          </sinch-icon-button>
        </sinch-input>
        {firstIsOpenRef.current && (
          <sinch-emoji-picker
            slot="content"
            aria-label="Emoji Picker"
            on-change={onEmojiChange}
          />
        )}
      </sinch-popover>
    </sinch-field>
  )
}
