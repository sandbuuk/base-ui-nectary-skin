import { Component } from '@angular/core'
import '@sinch-engage/nectary/search'

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  value: string
  label: string | null
  placeholder: string | null
  isControlled: boolean
  maxVisibleItems: number | null

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.label = url.searchParams.get('label')
    this.placeholder = url.searchParams.get('placeholder')
    this.isControlled = url.searchParams.get('uncontrolled') === null

    const numVisibleValue = url.searchParams.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
    }
    window.dispatchEvent(new CustomEvent('sinch-search-change', {detail: (e as CustomEvent).detail}))
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-search-blur'))
  }
}
