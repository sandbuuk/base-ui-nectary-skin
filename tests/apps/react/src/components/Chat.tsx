import type { FC } from 'react'
import '@sinch-engage/nectary/chat'
import '@sinch-engage/nectary/chat-block'
import '@sinch-engage/nectary/chat-bubble'
import '@sinch-engage/nectary/avatar'

type TChat = {
  search: URLSearchParams,
}

export const Chat: FC<TChat> = ({ search }) => {
  const example = search.get('example')

  if (example === 'bubble') {
    const type: any = search.get('type')

    return (
      <sinch-chat-block type={type} firstName="Chat" lastName="Chatman" timestamp="3:27am">
        <sinch-avatar slot="avatar" alt="CC" size="l"/>
        <sinch-chat-bubble slot="bubble" text="Hello, I'm Chat..."/>
      </sinch-chat-block>
    )
  }

  return (
    <sinch-chat>
      <sinch-chat-block type="customer" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
        <sinch-avatar slot="avatar" alt="CC" size="l"/>
        <sinch-chat-bubble slot="bubble" status="sending" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <sinch-chat-bubble slot="bubble" status="seen" text="Lorem ipsum dolor sit amet..."/>
      </sinch-chat-block>
      <sinch-chat-block type="agent-prev" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
        <sinch-chat-bubble slot="bubble" status="sent" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      </sinch-chat-block>
      <sinch-chat-block type="customer" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
        <sinch-avatar slot="avatar" alt="CC" size="l"/>
        <sinch-chat-bubble slot="bubble" status="received" text="Ut enim ad minim veniam"/>
      </sinch-chat-block>
      <sinch-chat-block type="agent" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
        <sinch-chat-bubble slot="bubble" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <sinch-chat-bubble slot="bubble" status="error" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <sinch-chat-bubble slot="bubble" status="sent" text="Lorem ipsum dolor sit amet..."/>
      </sinch-chat-block>
    </sinch-chat>
  )
}
