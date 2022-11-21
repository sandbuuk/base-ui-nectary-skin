import { Component } from '@angular/core'
import '@sinch-engage/nectary/pagination'
import { attrValueToInteger } from '@sinch-engage/nectary/utils'

@Component({
  selector: 'pagination-component',
  templateUrl: './Pagination.component.html',
  styles: [':host{ display: contents; }']
})

export class PaginationComponent {
  value: number | null
  max: number | null
  isControlled: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = attrValueToInteger(url.searchParams.get('value'))
    this.max = attrValueToInteger(url.searchParams.get('max'))
    this.isControlled = url.searchParams.get('uncontrolled') === null
  }

  onChange(e: Event) {
    window.dispatchEvent(new CustomEvent('sinch-pagination-change', {detail: (e as CustomEvent).detail}))
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
    }
  }

  onFocus(){
    window.dispatchEvent(new CustomEvent('sinch-pagination-focus'))
  }

  onBlur(){
    window.dispatchEvent(new CustomEvent('sinch-pagination-blur'))
  }
}
