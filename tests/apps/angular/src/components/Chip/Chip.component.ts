import { Component } from '@angular/core'
import '@nectary/components/chip'
import '@nectary/components/icon'

@Component({
  selector: 'chip-component',
  templateUrl: './Chip.component.html',
  styles: [':host{ display: contents; }']
})

export class ChipComponent {
  color?: string
  text?: string
  isSmall: boolean
  hasIcon: boolean
  hasRightIcon: boolean

  constructor() {
    const url = new URL(location.href)
    this.color = url.searchParams.get('color') as string ?? undefined
    this.text = url.searchParams.get('text') ?? ''
    this.isSmall = url.searchParams.get('small') != null
    this.hasIcon = url.searchParams.get('icon') != null
    this.hasRightIcon = url.searchParams.get('right-icon') != null
  }

  onClick() {
    window.dispatchEvent(new CustomEvent('sinch-chip-click'))
  }

  onFocus(){
    window.dispatchEvent(new CustomEvent('sinch-chip-focus'))
  }

  onBlur(){
    window.dispatchEvent(new CustomEvent('sinch-chip-blur'))
  }
}
