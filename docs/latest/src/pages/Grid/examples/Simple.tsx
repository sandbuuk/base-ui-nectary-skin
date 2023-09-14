import type { FC } from 'react'
import '@nectary/components/grid'
import '@nectary/components/grid-item'
import '@nectary/components/card'
import '@nectary/components/button'
import '@nectary/components/link'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/assets/icons-branded/chatbot'

export const SimpleExample: FC = () => {
  return (
    <sinch-grid>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={4}>
        <sinch-card slot="content" caption="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
          <sinch-illustration-phone-and-cat slot="illustration"/>
        </sinch-card>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={4}>
        <sinch-card slot="content" caption="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
          <sinch-icon-branded-chatbot slot="icon"/>
        </sinch-card>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={2}>
        <sinch-card slot="content" caption="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
          <sinch-link href="#" preventDefault standalone text="Link" slot="action" aria-label="Link"/>
        </sinch-card>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl={3} l={4} m={4} s={2}>
        <sinch-card slot="content" caption="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
          <sinch-button slot="action" type="primary" text="Button" aria-label="Button"/>
        </sinch-card>
      </sinch-grid-item>
    </sinch-grid>
  )
}
