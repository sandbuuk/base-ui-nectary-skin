import { Component } from '@angular/core'
import '@nectary/components/text'
import '@nectary/components/link'
import '@nectary/components/code-tag'
import { ActivatedRoute } from '@angular/router'

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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.text = search.get('text')
    this.type = search.get('type')
    this.isInline = search.get('inline') !== null
    this.isEmphasized = search.get('emphasized') !== null
  }
}
