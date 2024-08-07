import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/assets/icons/fa-face-laugh'
import '@nectary/assets/icons/fa-paperclip-vertical'
import '@nectary/assets/icons/fa-brackets-curly'
import '@nectary/assets/icons/fa-comment-plus'
import '@nectary/assets/icons/fa-ellipsis'

export const BottomExample: FC = () => {
  const [state, setState] = useState('')

  return (
    <sinch-textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      value={state}
      on-change={(e) => setState(e.detail)}
      style={{ width: '500px' }}
    >
      <sinch-button slot="bottom" aria-label="Paperclip">
        <sinch-icon-fa-paperclip-vertical slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Emoji">
        <sinch-icon-fa-face-laugh slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Variables">
        <sinch-icon-fa-brackets-curly slot="icon"/>
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
        {/* <sinch-icon-send slot="right-icon" /> */}
      </sinch-button>
    </sinch-textarea>
  )
}
