import type { FC } from 'react'
import '@sinch-engage/nectary/grid'
import '@sinch-engage/nectary/grid-item'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/illustrations/phone-and-cat'
import '@sinch-engage/nectary/icons-branded/chatbot'

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
