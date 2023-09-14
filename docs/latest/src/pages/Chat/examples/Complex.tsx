import type { FC } from 'react'
import '@nectary/components/chat'
import '@nectary/components/chat-block'
import '@nectary/components/chat-bubble'
import '@nectary/components/avatar'

export const ComplexExample: FC = () => (
  <sinch-chat>
    <sinch-chat-block
      type="customer"
      firstName="Chat"
      lastName="Chatman"
      timestamp="5:42pm"
    >
      <sinch-avatar
        slot="avatar"
        size="l"
        color="light-violet"
        alt="CC"
      />
      <sinch-chat-bubble
        slot="bubble"
        status="sending"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <sinch-chat-bubble
        slot="bubble"
        status="seen"
        text="Lorem ipsum dolor sit amet..."
      />
    </sinch-chat-block>
    <sinch-chat-block
      type="agent-prev"
      firstName="Chat"
      lastName="Chatman"
      timestamp="5:42pm"
    >
      <sinch-chat-bubble
        slot="bubble"
        status="sent"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </sinch-chat-block>
    <sinch-chat-block
      type="customer"
      firstName="Chat"
      lastName="Chatman"
      timestamp="5:42pm"
    >
      <sinch-avatar
        slot="avatar"
        size="l"
        color="light-violet"
        alt="CC"
      />
      <sinch-chat-bubble slot="bubble" status="received" text="Ut enim ad minim veniam"/>
    </sinch-chat-block>
    <sinch-chat-block
      type="agent"
      firstName="Chat"
      lastName="Chatman"
      timestamp="5:42pm"
    >
      <sinch-chat-bubble
        slot="bubble"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <sinch-chat-bubble
        slot="bubble"
        status="error"
        text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <sinch-chat-bubble
        slot="bubble"
        status="sent"
        text="Lorem ipsum dolor sit amet..."
      />
    </sinch-chat-block>
  </sinch-chat>
)
