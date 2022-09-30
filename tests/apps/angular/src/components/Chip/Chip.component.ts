import { Component } from '@angular/core'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/icons/mood-bad'
import { TSinchColorName } from '@sinch-engage/nectary/utils/colors'

@Component({
  selector: 'chip-component',
  templateUrl: './Chip.component.html',
  styleUrls: ['./Chip.component.css']
})

export class ChipComponent {
  color?: TSinchColorName
  text?: string
  isSmall: boolean
  hasIcon: boolean

  constructor() {
    const url = new URL(location.href)
    this.color = url.searchParams.get('color') as TSinchColorName ?? undefined
    this.text = url.searchParams.get('text') ?? ''
    this.isSmall = url.searchParams.get('small') != null
    this.hasIcon = url.searchParams.get('icon') != null
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
