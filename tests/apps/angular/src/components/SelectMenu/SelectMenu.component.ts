import { Component } from '@angular/core'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/icons/open-in-new'

type TMenuValue = {
  text: string,
  icon: string | null,
  isDisabled?: boolean,
}

@Component({
  selector: 'select-menu-component',
  templateUrl: './SelectMenu.component.html',
  styleUrls: ['./SelectMenu.component.css']
})

export class SelectMenuComponent {
  value: string
  rows: number | null
  isMultiple: boolean
  options: Record<string, TMenuValue> = {
    1: { text: 'Option 1 value long long long', icon: '1' },
    2: { text: 'Option 2', icon: '1', isDisabled: true },
    3: { text: 'Option 3', icon: null },
    4: { text: 'Option 4', icon: null },
  }

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''

    const numVisibleValue = url.searchParams.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
    this.isMultiple = url.searchParams.get('multiple') !== null
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: (e as CustomEvent).detail}))
    this.value = value
  }
}
