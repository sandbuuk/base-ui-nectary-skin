import { useRef, useState } from 'react'
import type { TSinchRichTextareaElement } from '@nectary/components/rich-textarea/types'
import type { FC } from 'react'
import '@nectary/components/rich-textarea'
import '@nectary/components/button'
import '@nectary/assets/icons/fa-italic'
import '@nectary/assets/icons/fa-face-smile'
import '@nectary/assets/icons/fa-bold'
import '@nectary/assets/icons/fa-strikethrough'
import '@nectary/assets/icons/fa-code'
import '@nectary/assets/icons/fa-text'

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
          <sinch-icon-fa-italic slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format bold"
        >
          <sinch-icon-fa-bold slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format strikethrough"
        >
          <sinch-icon-fa-strikethrough slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="top"
          size="s"
          aria-label="Format code tag"
        >
          <sinch-icon-fa-code slot="icon"/>

        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Toggle toolbar"
        >
          <sinch-icon-fa-text slot="icon"/>
        </sinch-button>
        <sinch-button
          slot="bottom"
          size="s"
          aria-label="Open Emoji Picker"
        >
          <sinch-icon-fa-face-smile slot="icon"/>
        </sinch-button>
      </sinch-rich-textarea>
    </div>
  )
}
