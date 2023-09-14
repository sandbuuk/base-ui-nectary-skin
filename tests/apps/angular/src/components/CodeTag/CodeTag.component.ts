import { Component } from '@angular/core'
import '@nectary/components/code-tag'
import '@nectary/components/text'

@Component({
  selector: 'code-tag-component',
  templateUrl: './CodeTag.component.html',
  styles: [':host{ display: contents; }']
})

export class CodeTagComponent {
  text: string | null
  isEllipsis: boolean

  constructor() {
    const url = new URL(location.href)
    this.text = url.searchParams.get('text')
    this.isEllipsis = url.searchParams.get('ellipsis') !== null
  }
}
