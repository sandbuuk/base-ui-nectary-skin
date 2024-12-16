import type { FC } from 'react'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/text'

export const ClickableExample: FC = () => (
  <sinch-card-v2 on-click={() => console.log('click')} aria-label="Click me">
    <sinch-card-v2-title slot="title" text="Click me"/>
    <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</sinch-text>
  </sinch-card-v2>
)
