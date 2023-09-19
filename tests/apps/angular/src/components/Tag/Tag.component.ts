import { Component } from '@angular/core'
import '@nectary/components/tag'
import '@nectary/assets/icons/open-in-new'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'tag-component',
  templateUrl: './Tag.component.html',
  styles: [':host{ display: contents; }']
})

export class TagComponent {
  color: string
  text?: string
  isSmall: boolean
  hasIcon: boolean

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.color = search.get('color') ?? ''
    this.text = search.get('text') ?? ''
    this.isSmall = search.get('small') != null
    this.hasIcon = search.get('icon') != null
  }
}
