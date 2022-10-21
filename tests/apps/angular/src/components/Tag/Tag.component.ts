import { Component } from '@angular/core'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/open-in-new'


@Component({
  selector: 'tag-component',
  templateUrl: './Tag.component.html',
  styleUrls: ['./Tag.component.css']
})

export class TagComponent {
  color: string
  text?: string
  isSmall: boolean
  hasIcon: boolean

  constructor() {
    const url = new URL(location.href)
    this.color = url.searchParams.get('color') ?? ''
    this.text = url.searchParams.get('text') ?? ''
    this.isSmall = url.searchParams.get('small') != null
    this.hasIcon = url.searchParams.get('icon') != null
  }
}
