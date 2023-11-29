import { useRef, useState } from 'react'
import type { TSinchRichTextareaElement } from '@nectary/components/rich-textarea/types'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/icon'
import '@nectary/components/button'

export const SlotsExample: FC = () => {
  const ref = useRef<TSinchRichTextareaElement>(null)
  const [value, setValue] = useState('')

  const onChange = (e: CustomEvent<string>) => {
    setValue(e.detail)
  }

  return (
    <div>
      <sinch-rich-textarea
        ref={ref}
        value={value}
        on-change={onChange}
        aria-label="Editor"
        placeholder="Write your message..."
      >
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format italic"
        >
          <sinch-icon slot="icon" name="format_italic"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format bold"
        >
          <sinch-icon slot="icon" name="format_bold"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format strikethrough"
        >
          <sinch-icon slot="icon" name="format_strikethrough"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format code tag"
        >
          <sinch-icon slot="icon" name="code"/>
        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Toggle toolbar"
        >
          <sinch-icon slot="icon" name="text_format"/>
        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Open Emoji Picker"
        >
          <sinch-icon slot="icon" name="sentiment_satisfied"/>
        </sinch-button>
      </sinch-rich-textarea>
    </div>
  )
}
