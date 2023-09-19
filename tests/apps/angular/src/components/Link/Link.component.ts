import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/link'
import '@nectary/components/text'

@Component({
  selector: 'link-component',
  templateUrl: './Link.component.html',
  styles: [':host{ display: contents; }']
})

export class LinkComponent {
  href: string | null
  text: string | null
  isDisabled: boolean
  isExternal: boolean
  isStandalone: boolean

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.href = search.get('href')
    this.text = search.get('text')
    this.isDisabled = search.get('disabled') != null
    this.isExternal = search.get('external') != null
    this.isStandalone = search.get('standalone') != null
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
