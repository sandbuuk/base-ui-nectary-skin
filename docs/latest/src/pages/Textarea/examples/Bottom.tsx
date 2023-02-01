import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary-assets/icons/mood'
import '@sinch-engage/nectary-assets/icons/variables'
import '@sinch-engage/nectary-assets/icons/attach-file'
import '@sinch-engage/nectary-assets/icons/add-comment'
import '@sinch-engage/nectary-assets/icons/more-horiz'
import '@sinch-engage/nectary-assets/icons/send'

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
      <sinch-icon-button slot="bottom" aria-label="Paperclip">
        <sinch-icon-attach-file slot="icon"/>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Emoji">
        <sinch-icon-mood slot="icon"/>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Variables">
        <sinch-icon-variables slot="icon"/>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Comment">
        <sinch-icon-add-comment slot="icon"/>
      </sinch-icon-button>
      <sinch-icon-button slot="bottom" aria-label="Comment">
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
  )
}
