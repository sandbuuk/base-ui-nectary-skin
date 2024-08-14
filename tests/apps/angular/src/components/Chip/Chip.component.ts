import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/chip'
import '@nectary/assets/icons/fa-face-smile'
import '@nectary/assets/icons/fa-plus'

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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.color = search.get('color') as string ?? undefined
    this.text = search.get('text') ?? ''
    this.isSmall = search.get('small') != null
    this.hasIcon = search.get('icon') != null
    this.hasRightIcon = search.get('right-icon') != null
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
