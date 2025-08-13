import type { FC } from 'react'
import '@nectary/components/grid'
import '@nectary/components/grid-item'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/button'
import '@nectary/components/link'
import '@nectary/components/text'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/assets/icons-branded/chatbot'

export const SimpleExample: FC = () => {
  return (
    <sinch-grid>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={4}>
        <sinch-card-v2 slot="content">
          <sinch-illustration-phone-and-cat slot="media"/>
          <sinch-card-v2-title slot="title" text="Card"/>
          <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</sinch-text>
        </sinch-card-v2>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={4}>
        <sinch-card-v2 slot="content">
          <sinch-card-v2-title slot="title" text="Card">
            <sinch-icon-branded-chatbot slot="icon"/>
          </sinch-card-v2-title>
          <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</sinch-text>
        </sinch-card-v2>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={2}>
        <sinch-card-v2 slot="content">
          <sinch-card-v2-title slot="title" text="Card"/>
          <sinch-link slot="footer" href="#" preventDefault standalone text="Link" aria-label="Link"/>
        </sinch-card-v2>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={2}>
        <sinch-card-v2 slot="content">
          <sinch-card-v2-title slot="title" text="Card"/>
          <sinch-button slot="footer" type="primary" text="Button" aria-label="Button"/>
        </sinch-card-v2>
      </sinch-grid-item>
    </sinch-grid>
  )
}
