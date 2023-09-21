import { Component } from '@angular/core'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/assets/icons/open-in-new'
import { ActivatedRoute } from '@angular/router'

const optionsLong: Record<string, TMenuValue> = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
  5: { text: 'Option 1 value long long long', icon: '1' },
  6: { text: 'Option 2', icon: '1', isDisabled: true },
  7: { text: 'Option 3', icon: null },
  8: { text: 'Option 4', icon: null },
}

const optionsShort: Record<string, TMenuValue> = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
}

type TMenuValue = {
  text: string,
  icon: string | null,
  isDisabled?: boolean,
}

@Component({
  selector: 'select-menu-component',
  templateUrl: './SelectMenu.component.html',
  styles: [':host{ display: contents; }']
})

export class SelectMenuComponent {
  value: string
  rows: number | null
  isMultiple: boolean
  options: Record<string, TMenuValue>

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''

    const numVisibleValue = search.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
    this.isMultiple = search.get('multiple') !== null

    this.options = search.get('example') === 'lots'
      ? optionsLong
      : optionsShort
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-select-menu-change', {detail: (e as CustomEvent).detail}))
    this.value = value
  }
}
