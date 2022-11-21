import { Component } from '@angular/core'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/illustrations/phone-and-cat'
import '@sinch-engage/nectary/icons-branded/chatbot'

@Component({
  selector: 'card-component',
  templateUrl: './Card.component.html',
  styles: [':host{ display: contents; }']
})

export class CardComponent {
  header: string | null
  text: string | null
  label: string | null
  isDisabled: boolean
  hasIllustration: boolean
  hasIcon: boolean
  linkText: string | null
  buttonText: string | null
  background: string | null

  constructor() {
    const url = new URL(location.href)
    this.header = url.searchParams.get('header')
    this.text = url.searchParams.get('text')
    this.label = url.searchParams.get('label')
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.hasIllustration = url.searchParams.get('illustration') !== null
    this.hasIcon = url.searchParams.get('icon') !== null
    this.linkText = url.searchParams.get('link')
    this.buttonText = url.searchParams.get('button')
    this.background = url.searchParams.get('bg')
  }
}
