import type { FC } from 'react'
import '../../../utils/grid-debug'
import '@sinch-engage/nectary/grid'
import '@sinch-engage/nectary/grid-item'
import '@sinch-engage/nectary-assets/illustrations/phone-and-cat'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/button'

type TGrid = {
  search: URLSearchParams,
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'

export const Grid: FC<TGrid> = () => {
  return (
    <div style={{ position: 'relative' }}>
      <sinch-grid>
        <sinch-grid-item slot="item" xl={3} l={4} m={4} s={4}>
          <sinch-card slot="content" caption="Card" text={text}>
            <sinch-illustration-phone-and-cat slot="illustration"/>
          </sinch-card>
        </sinch-grid-item>
        <sinch-grid-item slot="item" xl={3} l={4} m={4} s={4}>
          <sinch-card slot="content" caption="Card" text={text}>
            <sinch-icon-branded-chatbot slot="icon"/>
          </sinch-card>
        </sinch-grid-item>
        <sinch-grid-item slot="item" xl={3} l={4} m={4} s={2}>
          <sinch-card slot="content" caption="Card" text={text}>
            <sinch-link href="#" text="Link" standalone preventDefault slot="action" aria-label="Link"/>
          </sinch-card>
        </sinch-grid-item>
        <sinch-grid-item slot="item" xl={3} l={4} m={4} s={2}>
          <sinch-card slot="content" caption="Card" text={text}>
            <sinch-button type="primary" aria-label="Button" onClick={() => {}} text="Button" slot="action"/>
          </sinch-card>
        </sinch-grid-item>
      </sinch-grid>
      <test-grid-debug/>
    </div>
  )
}
