import { Component } from '@angular/core'
import '@nectary/components/card'
import '@nectary/components/link'
import '@nectary/components/button'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/assets/icons-branded/chatbot'

@Component({
  selector: 'card-component',
  templateUrl: './Card.component.html',
  styles: [':host{ display: contents; }']
})

export class CardComponent {
  header: string | null
  text: string | null
  label: string | null
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
    this.hasIllustration = url.searchParams.get('illustration') !== null
    this.hasIcon = url.searchParams.get('icon') !== null
    this.linkText = url.searchParams.get('link')
    this.buttonText = url.searchParams.get('button')
    this.background = url.searchParams.get('bg')
  }
}
