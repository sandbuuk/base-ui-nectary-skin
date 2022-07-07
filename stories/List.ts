import { useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/list'
import '@sinch-engage/nectary/list-item'

export default {
  title: 'Components/List',
  argTypes: {},
} as Meta

const Template = (innerHTML: string): Story => () => {
  const listRef = useRef<HTMLElementTagNameMap['sinch-list'] | null>(null)

  if (listRef.current === null) {
    const $list = document.createElement('sinch-list')

    $list.innerHTML = innerHTML

    listRef.current = $list
  }

  return listRef.current
}

const listInnerHtml = `
<sinch-list-item>
  <div slot="content" style="display: flex;align-items: center;gap: 12px;font: var(--sinch-font-body);">
    <sinch-icon-branded-chatbot></sinch-icon-branded-chatbot>
    <span style="flex: 1;">Replace me</span>
    <sinch-icon-button aria-label="Add" small><sinch-icon-add slot="icon"></sinch-icon-add></sinch-icon-button>
  </div>
</sinch-list-item>
<sinch-list-item>
  <div slot="content" style="display: flex;align-items: center;gap: 12px;font: var(--sinch-font-body);">
    <sinch-icon-branded-chatbot></sinch-icon-branded-chatbot>
    <span style="flex: 1;">Replace me</span>
    <sinch-icon-button aria-label="Add" small><sinch-icon-add slot="icon"></sinch-icon-add></sinch-icon-button>
  </div>
</sinch-list-item>
<sinch-list-item>
  <div slot="content" style="display: flex;align-items: center;gap: 12px;font: var(--sinch-font-body);">
    <sinch-icon-branded-chatbot></sinch-icon-branded-chatbot>
    <span style="flex: 1;">Replace me</span>
    <sinch-icon-button aria-label="Add" small><sinch-icon-add slot="icon"></sinch-icon-add></sinch-icon-button>
  </div>
</sinch-list-item>
<sinch-list-item>
  <div slot="content" style="display: flex;align-items: center;gap: 12px;font: var(--sinch-font-body);">
    <sinch-icon-branded-chatbot></sinch-icon-branded-chatbot>
    <span style="flex: 1;">Replace me</span>
    <sinch-icon-button aria-label="Add" small><sinch-icon-add slot="icon"></sinch-icon-add></sinch-icon-button>
  </div>
</sinch-list-item>
`

export const List = Template(listInnerHtml)

List.parameters = {
  docs: {
    source: {
      code: `
<sinch-list>
  <sinch-list-item>
    <div slot="content"></div>
  </sinch-list-item>
  <sinch-list-item>
    <div slot="content"></div>
  </sinch-list-item>
  <sinch-list-item>
    <div slot="content"></div>
  </sinch-list-item>
  <sinch-list-item>
    <div slot="content"></div>
  </sinch-list-item>
</sinch-list>`,
    },
  },
}
