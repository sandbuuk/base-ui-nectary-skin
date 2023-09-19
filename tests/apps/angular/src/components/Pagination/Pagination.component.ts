import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/pagination'
import { attrValueToInteger } from '@nectary/components/utils'

@Component({
  selector: 'pagination-component',
  templateUrl: './Pagination.component.html',
  styles: [':host{ display: contents; }']
})

export class PaginationComponent {
  value: number | null
  max: number | null
  isControlled: boolean

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = attrValueToInteger(search.get('value'))
    this.max = attrValueToInteger(search.get('max'))
    this.isControlled = search.get('uncontrolled') === null
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
