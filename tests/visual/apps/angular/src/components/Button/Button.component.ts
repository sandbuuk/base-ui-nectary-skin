import { Component } from '@angular/core'
import '@nectary/components/button'

@Component({
  selector: 'button-component',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.css']
})

export class ButtonComponent {
  type: string | null
  text: string | null
  isDisabled: boolean
  isSmall: boolean
  hasIcon: boolean

  constructor() {
    const url = new URL(location.href)
    this.type = url.searchParams.get('type')
    this.text = url.searchParams.get('text')
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.isSmall = url.searchParams.get('small') !== null
    this.hasIcon = url.searchParams.get('icon') !== null
  }
}
