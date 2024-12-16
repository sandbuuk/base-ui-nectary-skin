import type { FC } from 'react'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/text'
import '@nectary/components/icon'

export const IconExample: FC = () => (
  <sinch-card-v2>
    <sinch-card-v2-title slot="title" text="Card Title">
      <sinch-icon slot="icon" icons-version="2" name="fa-square-dashed-circle-plus"/>
    </sinch-card-v2-title>
    <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</sinch-text>
  </sinch-card-v2>
)
