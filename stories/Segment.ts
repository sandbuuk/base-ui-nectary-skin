import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/segment'
import '@sinch-engage/nectary/segment-collapse'

export default {
  title: 'Components/Segment',
  argTypes: {
    caption: { control: 'text', defaultValue: 'New title', description: 'Segment title' },
    collapsed: { control: 'boolean', defaultValue: false, description: 'Segment collapsed state' },
  },
} as Meta

const Template = (innerHTML: string = ''): Story<JSX.IntrinsicElements['sinch-segment']> => () => {
  const [{ caption, collapsed }, updateArgs] = useArgs()
  const segmentRef = useRef<HTMLElementTagNameMap['sinch-segment'] | null>(null)
  const segmentCollapseRef = useRef<HTMLElementTagNameMap['sinch-segment-collapse'] | null>(null)

  if (segmentRef.current === null) {
    const $segment = document.createElement('sinch-segment')

    $segment.innerHTML = innerHTML

    segmentCollapseRef.current = $segment.querySelector('sinch-segment-collapse')

    if (segmentCollapseRef.current !== null) {
      segmentCollapseRef.current.addEventListener('change', (e: Event) => {
        updateArgs({ collapsed: (e as CustomEvent).detail })
      })
    }

    segmentRef.current = $segment
  }

  const $segment = segmentRef.current!

  $segment.caption = caption
  $segment.collapsed = collapsed

  if (segmentCollapseRef.current !== null) {
    segmentCollapseRef.current.value = collapsed
  }

  return segmentRef.current
}

const segmentCollapseHTML = `
  <sinch-segment-collapse slot="collapse" value="false"></sinch-segment-collapse>
`

const segmentInnerHTML = `
  <div slot="content" style="display: flex; flex-direction: column;">
    <section style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
    <sinch-input label="Label" value=""></sinch-input>
    <sinch-input label="Label" value=""></sinch-input>
  </div>
  <sinch-icon-branded-chatbot slot="icon" size="32"></sinch-icon-branded-chatbot>
  <sinch-tag slot="info" text="Label"></sinch-tag>
  <sinch-icon-button slot="info" small>
    <sinch-icon-apps slot="icon"></sinch-icon-apps>
  </sinch-icon-button>
  <sinch-checkbox slot="action" text="Checkbox"></sinch-checkbox>
  <sinch-button slot="action" text="Cancel" type="secondary" small></sinch-button>
  <sinch-button slot="action" text="Ok" type="primary" small></sinch-button>
`

export const Segment = Template(segmentCollapseHTML + segmentInnerHTML)

Segment.parameters = {
  docs: {
    source: {
      code: `<sinch-segment caption={caption}>
  <sinch-segment-collapse
    slot="collapse"
    value={isCollapsed}
    onChange={setCollapsedState}
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
