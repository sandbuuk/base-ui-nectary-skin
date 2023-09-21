import { Component } from '@angular/core'
import '@nectary/components/card'
import '@nectary/components/link'
import '@nectary/components/button'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/assets/icons-branded/chatbot'
import { ActivatedRoute } from '@angular/router'

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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.header = search.get('header')
    this.text = search.get('text')
    this.label = search.get('label')
    this.hasIllustration = search.get('illustration') !== null
    this.hasIcon = search.get('icon') !== null
    this.linkText = search.get('link')
    this.buttonText = search.get('button')
    this.background = search.get('bg')
  }
}
