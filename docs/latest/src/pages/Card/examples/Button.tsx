import type { FC } from 'react'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'

export const ButtonExample: FC = () => (
  <sinch-card
    caption="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  >
    <sinch-icon-branded-chatbot slot="icon"/>
    <sinch-button
      slot="action"
      type="primary"
      text="Click here link"
      aria-label="Click button"
      on-click={() => console.log('click')}
    />
  </sinch-card>
)
