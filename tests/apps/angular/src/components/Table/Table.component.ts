import { Component } from '@angular/core'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/toggle'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/icon'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/text'

type TTableItems = {head: TTableItem[], body: TTableItem[][]}
type TTableItem = {
  isCheckbox?: boolean,
  isFit?: boolean,
  isLink?: boolean,
  isIcon?: boolean,
  isButton?: boolean,
  isToggle?: boolean,
  isSortable?: boolean,
  isFilterable?: boolean,
  text?: string,
  tooltip?: string,
  align?: 'center' | 'end',
  iconName?: string,
}

const getTableItems = ({ hasLongLine }: any): TTableItems => ({
  head: [
    { isCheckbox: true, isFit: true },
    { text: 'ID', isSortable: true, align: 'end' },
    { text: 'Ticket' },
    { text: 'Channel', align: 'center', tooltip: 'Tooltip text', isSortable: true, isFilterable: true },
    { text: 'Comment long long' },
    { text: 'Active', align: 'center' },
    { text: 'Actions', isFit: true, tooltip: 'Tooltip text' },
  ],
  body: [
    [
      { isCheckbox: true },
      { text: '123', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconName: 'open_in_new' },
      hasLongLine === true
        ? { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
        : { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'more_vert' },
    ],
    [
      { isCheckbox: true },
      { text: '456789', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconName: 'open_in_new' },
      { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'more_vert' },
    ],
  ],
})

@Component({
  selector: 'table-component',
  templateUrl: './Table.component.html',
  styles: [':host{ display: contents; }']
})

export class TableComponent {
  state: TTableItems
  isAsc: boolean = false

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    const example = search.get('example')
    this.state = getTableItems({hasLongLine: example === 'long'})
  }

  onSortChange(e: Event) {
    this.isAsc = (e as CustomEvent).detail
    window.dispatchEvent(new CustomEvent('sinch-table-sort-change', {detail: (e as CustomEvent).detail}))
  }

  onSortFocus() {
    window.dispatchEvent(new CustomEvent('sinch-table-sort-focus'))
  }

  onSortBlur() {
    window.dispatchEvent(new CustomEvent('sinch-table-sort-blur'))
  }
}
