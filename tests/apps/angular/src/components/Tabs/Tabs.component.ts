import { Component } from '@angular/core'
import '@nectary/components/tabs'
import '@nectary/components/tabs-option'
import '@nectary/components/tabs-icon-option'

@Component({
  selector: 'tabs-component',
  templateUrl: './Tabs.component.html',
  styles: [':host{ display: contents; }']
})

export class TabsComponent {
  value = ''
  isDisabled: boolean
  example: string | null

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isDisabled = search.get('disabled') !== null
    this.example = search.get('example')
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
    window.dispatchEvent(new CustomEvent('sinch-tabs-change', {detail: this.value}))
  }
}
