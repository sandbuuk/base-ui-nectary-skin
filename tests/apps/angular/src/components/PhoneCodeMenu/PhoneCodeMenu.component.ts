import { Component } from '@angular/core'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/flag'
import countriesJson from '@sinch-engage/nectary/utils/countries.json'

@Component({
  selector: 'phone-code-menu-component',
  templateUrl: './PhoneCodeMenu.component.html',
  styles: [':host{ display: contents; }']
})

export class PhoneCodeMenuComponent {
  value: string
  rows: number | null
  countries = countriesJson

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''

    const numVisibleValue = url.searchParams.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: (e as CustomEvent).detail}))
    this.value = value
  }
}
