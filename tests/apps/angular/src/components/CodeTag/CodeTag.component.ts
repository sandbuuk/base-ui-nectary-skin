import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.text = search.get('text')
    this.isEllipsis = search.get('ellipsis') !== null
  }
}
