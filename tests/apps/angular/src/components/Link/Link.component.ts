import { Component } from '@angular/core'
import '@sinch-engage/nectary/link'

@Component({
  selector: 'link-component',
  templateUrl: './Link.component.html',
  styleUrls: ['./Link.component.css']
})

export class LinkComponent {
  href: string | null
  text: string | null
  isDisabled: boolean
  isExternal: boolean

  constructor() {
    const url = new URL(location.href)
    this.href = url.searchParams.get('href')
    this.text = url.searchParams.get('text')
    this.isDisabled = url.searchParams.get('disabled') != null
    this.isExternal = url.searchParams.get('external') != null
  }

  onClick(e: Event) {
    window.dispatchEvent(new CustomEvent('sinch-link-click'))
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-link-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-link-blur'))
  }
}
