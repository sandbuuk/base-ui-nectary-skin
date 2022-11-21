import { Component } from '@angular/core'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/link'

@Component({
  selector: 'text-component',
  templateUrl: './Text.component.html',
  styles: [':host{ display: contents; }']
})

export class TextComponent {
  text: string | null
  type: string | null
  isInline: boolean
  isEmphasized: boolean

  constructor() {
    const url = new URL(location.href)
    this.text = url.searchParams.get('text')
    this.type = url.searchParams.get('type')
    this.isInline = url.searchParams.get('inline') !== null
    this.isEmphasized = url.searchParams.get('emphasized') !== null
  }
}
