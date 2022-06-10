import { Component } from '@angular/core'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/card-link'
import '@sinch-engage/nectary/card-button'
import '@sinch-engage/nectary/illustration/phone-and-cat'
import '@sinch-engage/nectary/icons-branded/chatbot'
import '@sinch-engage/nectary/icons/arrow-forward'

@Component({
  selector: 'card-component',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
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
  }
}
