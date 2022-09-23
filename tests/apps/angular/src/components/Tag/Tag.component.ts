import { Component } from '@angular/core'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/mood-bad'
import { NO_COLOR, TSinchColorName } from '@sinch-engage/nectary/utils/colors'

@Component({
  selector: 'tag-component',
  templateUrl: './Tag.component.html',
  styleUrls: ['./Tag.component.css']
})

export class TagComponent {
  color: TSinchColorName
  text?: string
  isSmall: boolean
  hasIcon: boolean

  constructor() {
    const url = new URL(location.href)
    this.color = (url.searchParams.get('color') ?? NO_COLOR) as TSinchColorName
    this.text = url.searchParams.get('text') ?? ''
    this.isSmall = url.searchParams.get('small') != null
    this.hasIcon = url.searchParams.get('icon') != null
  }
}
