import { Component } from '@angular/core'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/flag'
import countriesJson from '@nectary/components/utils/countries.json'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'phone-code-menu-component',
  templateUrl: './PhoneCodeMenu.component.html',
  styles: [':host{ display: contents; }']
})

export class PhoneCodeMenuComponent {
  value: string
  rows: number | null
  countries = countriesJson

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''

    const numVisibleValue = search.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: (e as CustomEvent).detail}))
    this.value = value
  }
}
