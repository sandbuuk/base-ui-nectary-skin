import { Component } from '@angular/core'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/icons/more-vert'
import '@sinch-engage/nectary/icons/filter-list'
import '@sinch-engage/nectary/icons/north'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/toggle'
import '@sinch-engage/nectary/link'

@Component({
  selector: 'table-component',
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css']
})

export class TableComponent {
  state: {head: any[], body: any[][]}
  isAsc: boolean = false

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.state = JSON.parse(decodeURI(search.get('state')!))
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
