import { useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/grid'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/card-button'
import '@sinch-engage/nectary/card-link'
import '@sinch-engage/nectary/illustrations/phone-and-cat'
import '@sinch-engage/nectary/icons-branded/chatbot'

export default {
  title: 'Components/Grid',
} as Meta

const Template = (innerHTML: string = ''): Story => () => {
  const gridRef = useRef<HTMLElementTagNameMap['sinch-grid'] | null>(null)

  if (gridRef.current === null) {
    gridRef.current = document.createElement('sinch-grid')

    gridRef.current.innerHTML = innerHTML
  }

  return gridRef.current
}

const gridInnerHTML = `
  <sinch-grid-item slot="item" xl="3" l="4" m="4" s="4">
    <sinch-card slot="content" header="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
      <sinch-illustration-phone-and-cat slot="illustration"></sinch-illustration-phone-and-cat>
    </sinch-card>
  </sinch-grid-item>
  <sinch-grid-item slot="item" xl="3" l="4" m="4" s="4">
    <sinch-card slot="content" header="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
      <sinch-icon-branded-chatbot slot="icon"></sinch-icon-branded-chatbot>
    </sinch-card>
  </sinch-grid-item>
  <sinch-grid-item slot="item" xl="3" l="4" m="4" s="2">
    <sinch-card slot="content" header="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
      <sinch-card-link href="#" text="Link" slot="action"></sinch-card-link>
    </sinch-card>
  </sinch-grid-item>
  <sinch-grid-item slot="item" xl="3" l="4" m="4" s="2">
    <sinch-card slot="content" header="Card" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
      <sinch-card-button text="Button" slot="action"></sinch-card-button>
    </sinch-card>
  </sinch-grid-item>
`

export const Grid = Template(gridInnerHTML)

Grid.parameters = {
  docs: {
    source: {
      code: `<sinch-grid>${gridInnerHTML}</sinch-grid>`,
    },
  },
}
