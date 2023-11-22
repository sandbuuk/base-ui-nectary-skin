import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/tag'
import '@nectary/assets/icons/mood'
import '@nectary/assets/icons/variables'
import '@nectary/assets/icons/attach-file'
import '@nectary/assets/icons/add-comment'
import '@nectary/assets/icons/more-horiz'
import '@nectary/assets/icons/send'

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
        <sinch-icon-attach-file slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Emoji">
        <sinch-icon-mood slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Variables">
        <sinch-icon-variables slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon-add-comment slot="icon"/>
      </sinch-button>
      <sinch-button slot="bottom" aria-label="Comment">
        <sinch-icon-more-horiz slot="icon"/>
      </sinch-button>
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
  )
}
