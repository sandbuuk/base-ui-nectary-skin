import type { FC } from 'react'
import '@nectary/components/card'
import '@nectary/components/link'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/assets/illustrations/phone-and-cat'

export const IllustrationExample: FC = () => (
  <sinch-card
    caption="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  >
    <sinch-icon-branded-chatbot slot="icon"/>
    <sinch-illustration-phone-and-cat
      slot="illustration"
      background="green"
    />
    <sinch-link
      slot="action"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      text="Click here"
      aria-label="Link"
      standalone
    />
  </sinch-card>
)
