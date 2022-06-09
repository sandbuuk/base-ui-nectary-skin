import { useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/radio'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/icon/open-in-new'
import '@sinch-engage/nectary/icon/more-vert'
import '@sinch-engage/nectary/icon/south'
import '@sinch-engage/nectary/icon/north'
import '@sinch-engage/nectary/icon/filter-list'
import '@sinch-engage/nectary/icon-button'

export default {
  title: 'Components/Table',
  argTypes: {
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-table']> => () => {
  const tableRef = useRef<HTMLElementTagNameMap['sinch-table'] | null>(null)

  if (tableRef.current === null) {
    const $table = document.createElement('sinch-table')

    $table.innerHTML = innerHTML

    const $popover = $table.querySelector('sinch-popover')!

    $popover.querySelector('sinch-icon-button')!.addEventListener('click', () => {
      $popover.open = true
    })

    $popover.addEventListener('close', () => {
      $popover.open = false
    })

    $table.style.width = '100%'

    tableRef.current = $table
  }

  const $table = tableRef.current!

  return $table
}

const tableInnerHtml = `
  <sinch-table-head>
    <sinch-table-row>
        <sinch-table-head-cell fit>
          <sinch-checkbox slot="checkbox"></sinch-checkbox>
        </sinch-table-head-cell>
        <sinch-table-head-cell text="ID" align="end">
          <sinch-icon-button slot="right" small>
            <sinch-icon-south slot="icon"></sinch-icon-south>
          </sinch-icon-button>
        </sinch-table-head-cell>
        <sinch-table-head-cell text="Ticket"></sinch-table-head-cell>
        <sinch-table-head-cell text="Channel" align="center">
          <sinch-popover slot="left">
            <sinch-icon-button slot="target" small>
              <sinch-icon-filter-list slot="icon"></sinch-icon-filter-list>
            </sinch-icon-button>
            <div slot="content">Content</div>
          </sinch-popover>
          <sinch-icon-button slot="right" small>
            <sinch-icon-north slot="icon"></sinch-icon-north>
          </sinch-icon-button>
          <sinch-help-tooltip slot="tooltip" text="Tooltip text"></sinch-help-tooltip>
        </sinch-table-head-cell>
        <sinch-table-head-cell text="Comment"></sinch-table-head-cell>
        <sinch-table-head-cell text="Active" align="center"></sinch-table-head-cell>
        <sinch-table-head-cell text="Actions" fit>
          <sinch-help-tooltip slot="tooltip" text="Tooltip text"></sinch-help-tooltip>
        </sinch-table-head-cell>
    </sinch-table-row>
  </sinch-table-head>
  <sinch-table-body>
    <sinch-table-row selected>
        <sinch-table-cell>
          <sinch-checkbox checked></sinch-checkbox>
        </sinch-table-cell>
        <sinch-table-cell align="end"><span>123</span></sinch-table-cell>
        <sinch-table-cell>
          <sinch-link text="Link" href="#"></sinch-link>
        </sinch-table-cell>
        <sinch-table-cell align="center">
          <sinch-icon-open-in-new></sinch-icon-open-in-new>
        </sinch-table-cell>
        <sinch-table-cell><span>Lorem Ipsum</span></sinch-table-cell>
        <sinch-table-cell align="center">
          <sinch-toggle></sinch-toggle>
        </sinch-table-cell>
        <sinch-table-cell align="center">
          <sinch-icon-more-vert></sinch-icon-more-vert>
        </sinch-table-cell>
    </sinch-table-row>
    <sinch-table-row>
        <sinch-table-cell>
          <sinch-checkbox></sinch-checkbox>
        </sinch-table-cell>
        <sinch-table-cell align="end"><span>456789</span></sinch-table-cell>
        <sinch-table-cell>
          <sinch-link text="Link" href="#"></sinch-link>
        </sinch-table-cell>
        <sinch-table-cell align="center">
          <sinch-icon-open-in-new></sinch-icon-open-in-new>
        </sinch-table-cell>
        <sinch-table-cell>
          <span>Lorem Ipsum is simply dummy text</span>
        </sinch-table-cell>
        <sinch-table-cell align="center">
          <sinch-toggle></sinch-toggle>
        </sinch-table-cell>
        <sinch-table-cell align="center">
          <sinch-icon-more-vert></sinch-icon-more-vert>
        </sinch-table-cell>
    </sinch-table-row>
  </sinch-table-body>
`

export const Table = Template(tableInnerHtml)

Table.args = {}

Table.parameters = {
  docs: {
    source: {
      code: `<sinch-table>${tableInnerHtml}</sinch-table>`,
    },
  },
}
