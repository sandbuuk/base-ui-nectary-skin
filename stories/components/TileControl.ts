import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/tile-control'
import '@sinch-engage/nectary/tile-control-option'
import '@sinch-engage/nectary/icons/accessibility'
import '@sinch-engage/nectary/icons/chat'
import '@sinch-engage/nectary/icons/title'
import '@sinch-engage/nectary/icons/format-align-left'
import '@sinch-engage/nectary/icons/qr-code'
import '@sinch-engage/nectary/icons/library-add-check'
import '@sinch-engage/nectary/icons/smart-button'
import '@sinch-engage/nectary/icons/add-to-home-screen'
import '@sinch-engage/nectary/icons-branded/contact'
import '@sinch-engage/nectary/icons-channel/whatsapp'

export default {
  title: 'Components/TileControl',
  argTypes: {
    value: { control: 'text' },
    small: { control: 'boolean' },
    multiple: { control: 'boolean' },
    cols: { control: 'number' },
    'on-change': { description: '' },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [{ value, cols, small, multiple }, updateArgs] = useArgs()
  const tileRef = useRef<HTMLElementTagNameMap['sinch-tile-control'] | null>(null)

  if (tileRef.current === null) {
    const $tile = document.createElement('sinch-tile-control')

    $tile.innerHTML = innerHTML

    $tile.addEventListener('-change', (e) => {
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    tileRef.current = $tile
  }

  const $tabs = tileRef.current!

  $tabs.value = value
  $tabs.cols = cols
  $tabs.multiple = multiple
  $tabs.small = small

  return $tabs
}

const innerHTML = `
<sinch-tile-control-option value="0" text="Message" aria-label="Message">
  <sinch-icon-chat slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="1" text="Title" aria-label="Title">
  <sinch-icon-title slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="2" disabled text="Text" aria-label="Text">
  <sinch-icon-format-align-left slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="3" text="QR Code" aria-label="qr code">
  <sinch-icon-qr-code slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="4" text="Terms" aria-label="terms">
  <sinch-icon-library-add-check slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="5" text="Button" aria-label="button">
  <sinch-icon-smart-button slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="6" text="Mobile App" aria-label="mobile app">
  <sinch-icon-add-to-home-screen slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="7" text="Click to call" aria-label="click to call">
  <sinch-icon-channel-whatsapp slot="icon"/>
</sinch-tile-control-option>
<sinch-tile-control-option value="8" text="Separator" aria-label="separator">
  <sinch-icon-branded-contact slot="icon"/>
</sinch-tile-control-option>
`

export const TileControl = Template(innerHTML)

TileControl.args = {
  value: '1',
  cols: 3,
  small: true,
  multiple: true,
}

TileControl.parameters = {
  docs: {
    source: {
      code: `<sinch-tile-control value={value} on-change={setValue} small multiple>${innerHTML}</sinch-tile-control>`,
    },
  },
}
