import { Component } from '@angular/core'
import '@nectary/components/table'
import '@nectary/components/table-body'
import '@nectary/components/table-head'
import '@nectary/components/table-row'
import '@nectary/components/table-cell'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-head-sort'
import '@nectary/components/help-tooltip'
import '@nectary/components/icon/open-in-new'
import '@nectary/components/icon/more-vert'
import '@nectary/components/checkbox'
import '@nectary/components/button'
import '@nectary/components/toggle'
import '@nectary/components/link'

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
