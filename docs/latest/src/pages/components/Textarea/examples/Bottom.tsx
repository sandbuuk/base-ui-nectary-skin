import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/components/icon'

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
        <sinch-icon name="fa-paperclip-vertical" slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Emoji">
        <sinch-icon name="fa-face-laugh" slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Variables">
        <sinch-icon name="fa-brackets-curly" slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon name="fa-comment-plus" slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
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
        {/* <sinch-icon name="send" slot="right-icon" /> */}
      </sinch-button>
    </sinch-textarea>
  )
}
