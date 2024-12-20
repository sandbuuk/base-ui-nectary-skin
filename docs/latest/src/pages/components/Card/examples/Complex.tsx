import type { FC } from 'react'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/text'
import '@nectary/components/icon'
import '@nectary/components/button'
import '@nectary/assets/illustrations/cat-texting'

export const ComplexExample: FC = () => (
  <sinch-card-v2>
    <sinch-illustration-cat-texting
      slot="media"
      background="blue"
    />
    <sinch-card-v2-title slot="title" text="Card Title">
      <sinch-icon slot="icon" icons-version="2" name="fa-square-dashed-circle-plus"/>
    </sinch-card-v2-title>
    <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</sinch-text>
    <sinch-button
      slot="footer"
      type="primary"
      text="Button label"
      aria-label="Button label"
      on-click={() => console.log('click')}
    />
  </sinch-card-v2>
)
