import type { FC } from 'react'
import '@nectary/components/card'
import '@nectary/assets/icons-branded/chatbot'

export const IconExample: FC = () => (
  <sinch-card
    caption="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  >
    <sinch-icon-branded-chatbot slot="icon"/>
  </sinch-card>
)
