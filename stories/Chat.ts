import { useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/chat'
import '@sinch-engage/nectary/chat-block'
import '@sinch-engage/nectary/chat-bubble'
import '@sinch-engage/nectary/chat-avatar'

export default {
  title: 'Components/Chat',
  argTypes: {},
} as Meta

const Template = (innerHTML: string = ''): Story => () => {
  // const [{ header, label, text, disabled }] = useArgs()
  const chatRef = useRef<HTMLElementTagNameMap['sinch-chat'] | null>(null)

  if (chatRef.current === null) {
    chatRef.current = document.createElement('sinch-chat')

    chatRef.current.innerHTML = innerHTML
  }

  const $chat = chatRef.current!

  return $chat
}

const chatInnerHTML = `
  <sinch-chat-block type="customer" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
    <sinch-chat-avatar slot="avatar" alt="CC"></sinch-chat-avatar>
    <sinch-chat-bubble slot="bubble" status="sending" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></sinch-chat-bubble>
    <sinch-chat-bubble slot="bubble" status="seen" text="Lorem ipsum dolor sit amet..."></sinch-chat-bubble>
  </sinch-chat-block>
    <sinch-chat-block type="agent-prev" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
    <sinch-chat-bubble slot="bubble" status="sent" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></sinch-chat-bubble>
  </sinch-chat-block>
    <sinch-chat-block type="customer" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
    <sinch-chat-avatar slot="avatar" alt="CC"></sinch-chat-avatar>
    <sinch-chat-bubble slot="bubble" status="received" text="Ut enim ad minim veniam"></sinch-chat-bubble>
  </sinch-chat-block>
  <sinch-chat-block type="agent" firstName="Chat" lastName="Chatman" timestamp="5:42pm">
    <sinch-chat-bubble slot="bubble" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></sinch-chat-bubble>
    <sinch-chat-bubble slot="bubble" status="error" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></sinch-chat-bubble>
    <sinch-chat-bubble slot="bubble" status="sent" text="Lorem ipsum dolor sit amet..."></sinch-chat-bubble>
  </sinch-chat-block>
`

export const Chat = Template(chatInnerHTML)

Chat.parameters = {
  docs: {
    source: {
      code: `<sinch-chat>${chatInnerHTML}</sinch-chat>`,
    },
  },
}
