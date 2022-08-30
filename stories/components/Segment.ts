import { sizeValues } from '@sinch-engage/nectary/segment/utils'
import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/segment'
import '@sinch-engage/nectary/segment-collapse'
import '@sinch-engage/nectary/icons/apps'
import '@sinch-engage/nectary/icons-branded/chatbot'

export default {
  title: 'Components/Segment',
  argTypes: {
    caption: { control: 'text', defaultValue: 'New title', description: 'Segment title' },
    collapsed: { control: 'boolean', defaultValue: false, description: 'Segment collapsed state' },
    size: { control: 'select', options: sizeValues, description: 'Segment Caption size' },
  },
} as Meta

const Template = (innerHTML: string = ''): Story => () => {
  const [{ caption, collapsed, size }, updateArgs] = useArgs()
  const segmentRef = useRef<HTMLElementTagNameMap['sinch-segment'] | null>(null)
  const segmentCollapseRef = useRef<HTMLElementTagNameMap['sinch-segment-collapse'] | null>(null)

  if (segmentRef.current === null) {
    const $segment = document.createElement('sinch-segment')

    $segment.innerHTML = innerHTML

    segmentCollapseRef.current = $segment.querySelector('sinch-segment-collapse')

    if (segmentCollapseRef.current !== null) {
      segmentCollapseRef.current.addEventListener('-change', (e) => {
        updateArgs({ collapsed: e.detail })
      })
    }

    segmentRef.current = $segment
  }

  const $segment = segmentRef.current!

  $segment.caption = caption
  $segment.collapsed = collapsed
  $segment.size = size

  if (segmentCollapseRef.current !== null) {
    segmentCollapseRef.current.value = collapsed
  }

  return segmentRef.current
}

const segmentInnerHTML = `
  <sinch-segment-collapse slot="collapse" value="false"></sinch-segment-collapse>
  <sinch-icon-branded-chatbot slot="icon" size="32"></sinch-icon-branded-chatbot>
  <div slot="preview" style="display: flex;flex-direction: column;background-color: #F1F3F4;align-items: center;justify-content: center;height: 100%;">
    <span style="font-size: 18px">Replace me!</span>
    <span style="font-size: 12px">Im a template component</span>
  </div>
  <sinch-tag slot="info" text="Label"></sinch-tag>
  <sinch-icon-button slot="info" small>
    <sinch-icon-apps slot="icon"></sinch-icon-apps>
  </sinch-icon-button>
  <div slot="content" style="display: flex; flex-direction: column;">
    <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
    <sinch-field label="Label">
      <sinch-input slot="input" value=""></sinch-input>
    </sinch-field>
    <sinch-field label="Label">
      <sinch-input slot="input" value=""></sinch-input>
    </sinch-field>
  </div>
  <sinch-checkbox slot="action" text="Checkbox"></sinch-checkbox>
  <sinch-button slot="action" text="Cancel" type="secondary" small></sinch-button>
  <sinch-button slot="action" text="Ok" type="primary" small></sinch-button>
`

export const Segment = Template(segmentInnerHTML)

Segment.parameters = {
  docs: {
    source: {
      code: `<sinch-segment caption={caption} size={size}>
  <sinch-segment-collapse
    slot="collapse"
    value={isCollapsed}
    on-change={setCollapsedState}
  ></sinch-segment-collapse>${segmentInnerHTML}</sinch-segment>`,
    },
  },
}

const segmentNoCollapseInnerHTML = `
  <section slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
  <sinch-icon-branded-chatbot slot="icon" size="32"></sinch-icon-branded-chatbot>
  <sinch-tag slot="info" text="Label"></sinch-tag>
  <sinch-icon-button slot="info" small>
    <sinch-icon-apps slot="icon"></sinch-icon-apps>
  </sinch-icon-button>
  <sinch-button slot="action" text="Ok" type="primary" small></sinch-button>
`

export const SegmentWithoutCollapse = Template(segmentNoCollapseInnerHTML)

SegmentWithoutCollapse.parameters = {
  docs: {
    source: {
      code: `<sinch-segment caption={caption}>${segmentNoCollapseInnerHTML}</sinch-segment>`,
    },
  },
}
