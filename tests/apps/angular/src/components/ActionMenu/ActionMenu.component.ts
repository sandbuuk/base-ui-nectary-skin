import { Component } from '@angular/core'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary-assets/icons/open-in-new'

type TMenuValue = {
  text: string,
  icon: string | null,
  isDisabled?: boolean,
}

@Component({
  selector: 'action-menu-component',
  templateUrl: './ActionMenu.component.html',
  styles: [':host{ display: contents; }']
})

export class ActionMenuComponent {
  rows: number | null
  options: Record<string, TMenuValue> = {
    1: { text: 'Option 1 value long long long', icon: '1' },
    2: { text: 'Option 2', icon: '1', isDisabled: true },
    3: { text: 'Option 3', icon: null },
    4: { text: 'Option 4', icon: null },
  }

  constructor() {
    const url = new URL(location.href)

    const numVisibleValue = url.searchParams.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onClick(value: string) {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-click', {detail: value}))
  }
}
