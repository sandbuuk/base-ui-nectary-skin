import type { FC } from 'react'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'

export const LinkExample: FC = () => (
  <sinch-card
    caption="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  >
    <sinch-icon-branded-chatbot slot="icon"/>
    <sinch-link
      slot="action"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      text="Click here"
      aria-label="Link"
      standalone
    />
  </sinch-card>
)
